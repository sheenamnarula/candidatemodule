import { JsonDataService } from './../../../services/json-data.service';
import { EmailService } from './../../../services/email.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  providers: [JsonDataService]

})
export class ForgotPasswordComponent implements OnInit {

  public userForm: FormGroup;
  public infoobj;
  private postobject;
  public candidates;
  public timer;
  public emailId = '';
  public loading = false;

  constructor( @Inject(FormBuilder) fb: FormBuilder, private emailservice: EmailService, private JsonDataService: JsonDataService,
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private router: Router, private emailService: EmailService) {
    // getting login form data
    this.userForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    });
  }

  ngOnInit() {
    // this.emailService.getRegister()
    //   .subscribe(resEmployeeData => {
    //     this.emailId = resEmployeeData.usermail2;
    //     console.log(this.emailId);
    //   });
  }

  // snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // verify user if already exist or not for password Reset
  verifyUserReset() {
    if (this.candidates[0] === 'found') {
      this.infoobj = {
        'to': this.userForm.value.email,
        'subject': 'Password Reset',
        'redirect': 'http://localhost:3000/passwordReset',
        'mailBody': 'Please Click on this link to Reset Account Password'
      };
      console.log(this.infoobj.to);
      // this.emailservice.postdata3(this.infoobj).subscribe(data => this.postobject = data,
      //   error => [this.openSnackBar('PASSWORD RESET LINK SENT', 'Please Check your mail'),
      //   [this.timer = setTimeout(() => this.router.navigate(['/login']), 500), this.loading = false]
      //   ], () => console.log('finished'));
    } else {
      this.openSnackBar('User not Registered', 'Please Register');
      this.loading = false;
    }
  }

  // on password reset submit
  onResetLink() {
    this.loading = true;
    // console.log(this.userForm.value.email);
    this.JsonDataService.getEmail(this.userForm.value.email).subscribe(resEmailData => [
      this.candidates = resEmailData, this.verifyUserReset()],
      error => {
        [this.openSnackBar('TECHNICAL ISSUE', 'Please Try after some time'), this.loading = false];
      });
  }
  onBack() {
    this.router.navigate(['/login']);
  }
}
