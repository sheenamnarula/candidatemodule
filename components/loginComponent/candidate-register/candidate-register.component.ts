import { log } from 'util';
import { Component, OnInit, Inject, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JsonDataService } from './../../../services/json-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { EmailService } from './../../../services/email.service';
import { Logger } from 'angular2-logger/core';
import { AuthenticationService } from './../../../services/authentication.service';
import { Data } from './../../../services/data.service';
@Component({
  selector: 'app-candidate-register',
  templateUrl: './candidate-register.component.html',
  styleUrls: ['./candidate-register.component.css'],
  providers: [JsonDataService]
})
export class CandidateRegisterComponent implements OnInit {

  public jsonObj = {};
  public languages = [];
  public profession = [];
  public placementCenter = [];
  public userForm: FormGroup;
  public emailId = '';
  public formData = {};
  public candidates;
  public timer;
  public pincode;
  public pincodeLocation;
  public areaList = [];
  public password = '';
  public passwordMatchWarning = '';
  public checkUserEmail;
  public loading = true;
  // public loading = false;
  public infoObj;
  public postObject;
  public emailDisable = false;
  public createdBy: any;
  public district: any;
  public state: any;
  public landmark: any;

  ngOnInit() {
    // getting languages and form data from json file
    this.JsonDataService.getPlacementCenter().subscribe(resJsonData => this.getPlacementCenter(resJsonData));

    this.JsonDataService.getProfession().subscribe(resJsonData => this.getProfession(resJsonData));

    this.JsonDataService.verifyToken(this.route.snapshot.queryParams['confirm']).subscribe(res => {
      if (res.msg != 'Session Expired') {
        if (res.data.username) {
          this.userForm.patchValue({
            'email': res.data.username
          })
          this.emailDisable = true;
        }
        console.log(this.userForm.value.email);
        this.verifyUser(this.userForm.value.email);
      }
      else {
        this.router.navigate(['/login']);
        this.data.openSnackBar(res.msg['msg'], "OK");
      }
    },
      (err) => {
        this.router.navigate(['/login']);
        this.data.openSnackBar("Session Expired", "OK");
      })

  }

  // check if email is undefined or already exists
  verifyUser(email) {
    this.JsonDataService.verifyUser(email).subscribe(resJsonData => {
      if (resJsonData['msg'] === 'user not exist') {
      } else if (resJsonData['msg'] === 'user already exist') {
        this.router.navigate(['/login']);
      }
    });
  }

  // redirect if user is undefined or already registered
  redirectInvalidUser(email) {
    if (email === undefined || this.checkUserEmail[0] === 'found') {
      this.logger.error('Invaild Email id, redirected to login');
      this.router.navigate(['/login']);
      // this.loading = false;

    } else {
      this.loading = false;
    }
  }

  // Getting placement Centers
  getPlacementCenter(jsonData) {
    this.placementCenter = jsonData;
  }

  // Getting Professions
  getProfession(jsonData) {
    this.profession = jsonData;
  }

  constructor( @Inject(FormBuilder) fb: FormBuilder, private authenticationService: AuthenticationService, private JsonDataService: JsonDataService, private route: ActivatedRoute,
    private router: Router, private http: Http, private emailService: EmailService, private data: Data,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private logger: Logger) {

    // register candidate form
    this.userForm = fb.group({
      fname: ['', [Validators.required, Validators.pattern('[A-Za-z]{2,}')]],
      lname: ['', [Validators.required]],
      gender: ['male', Validators.required],
      email: ['', Validators.required],
      regId: ['', Validators.required],
      // dob:'',
      aadhar: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      mob: ['', [Validators.required, , Validators.pattern('[0-9]{10,11}')]],
      role: ['candidate'],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],
      conPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,24}$/)]],

      profession: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      location: ['', Validators.required],
      placementCenter: ['', [Validators.required]]
    });
  }

  // snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // password confirm Validators
  passwordValue(pass) {
    this.password = pass;
  }
  conPasswordValue(conPass) {
    if (this.password !== conPass) {
      this.passwordMatchWarning = 'Password Not Match';
      (<HTMLInputElement>document.getElementById('resetBtn')).disabled = true;
    } else {
      this.passwordMatchWarning = '';
      // (<HTMLInputElement> document.getElementById(''resetBtn'')).disabled = false;
    }
  }

  // check Pincode
  getPincode() {
    if (this.pincode.length === 6) {
      // this.loading = true;
      this.JsonDataService.getPincode(this.pincode).subscribe(
        resPincodeData => [this.pincodeLocation = resPincodeData, this.getPincodeLocation()]);
    } else if (this.pincode.length !== 6) {
      this.areaList = [];
      this.userForm.value.location = '';
    }
  }

  // get pincode locations after checking pincode
  getPincodeLocation() {
    let officeName;
    this.userForm.value.location = '';
    this.areaList = [];
    this.pincodeLocation.records.forEach(element => {
      officeName = element['officename'];
      officeName = officeName.substr(0, officeName.length - 4);
      this.areaList.push(officeName + ', ' + element['Districtname'] + ', ' + element['statename']);
    });
    if (this.areaList.length === 0) {
      // this.loading = false;
      this.openSnackBar('No Location Found', 'Please Try again');
      // this.areaList.push('Area Not Found');
    } else {
      this.openSnackBar(this.pincodeLocation.count + ' Locations Found', 'Please Select');
      // this.loading = false;
    }
  }

  // on form submit
  onRegister(userdata) {

    // check who is creating user 
    let createdUser = this.authenticationService.getCreatedBy();
    if (createdUser == null) {
      this.createdBy = this.userForm.value.email;
    }

    this.landmark = userdata.get('location').value.split(',')[0];
    this.district = userdata.get('location').value.split(',')[1];
    this.state = userdata.get('location').value.split(',')[2];
    let userData = {
      profileData: {
        username: userdata.get('email').value,
        fname: userdata.get('fname').value, lname: userdata.get('lname').value,
        gender: userdata.get('gender').value, email: userdata.get('email').value,
        mobileNumber: userdata.get('mob').value, role: userdata.get('role').value,
        profession: userdata.get('profession').value,
        district: this.district,
        landmark: this.landmark,
        state: this.state,
        pincode: userdata.get('pincode').value,

        location: userdata.get('location').value,
        placementCenter: userdata.get('placementCenter').value,
        aadharNumber: userdata.get('aadhar').value,
        registerID: userdata.get('regId').value,
        createdBy: this.createdBy
      },
      userCredentialsData: {
        username: userdata.get('email').value, password: userdata.get('password').value,
        role: userdata.get('role').value,
      }
    };

    this.JsonDataService.registerUser(userData).subscribe(res => {
      console.log(res);
      if (res['success'] == true) {
        this.openSnackBar('Successfully Register', 'Please Login');
        this.router.navigate(['/login']);
      } else {
        this.openSnackBar('Failed', 'Please Try Again');
        this.router.navigate(['/login']);
      }
    })
  }
}
