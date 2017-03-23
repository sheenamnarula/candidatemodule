import { UserService } from './../../services/user.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ProfileService } from './../../services/profile.service';
// import { AuthenticationService } from 'app/services/authentication.service';
// import { UserService } from 'app/services/user.service';

import { Component, OnInit } from '@angular/core';
//import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProfileService]
})
export class DashboardComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
               //private appComponent: AppComponent,
               private profileService: ProfileService) { }
  ngOnInit() {
  }

  create(){
    this.profileService.create();
  }
  read(){
    this.profileService.read();
  }
  update(){
    this.profileService.update();
  }
  delete(){
    this.profileService.delete();
  }
}
