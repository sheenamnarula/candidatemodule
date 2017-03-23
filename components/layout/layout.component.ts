import { JsonDataService } from './../../services/json-data.service';
import { UserService } from './../../services/user.service';
import { AuthenticationService } from './../../services/authentication.service';
//import { AuthenticationService } from 'app/services/authentication.service';
//import { UserService } from 'app/services/user.service';

import { Component, OnInit } from '@angular/core';
//import { AppComponent } from 'app/app.component';
import { ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
//import { JsonDataService } from 'app/services/json-data.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers: [JsonDataService]
})
export class LayoutComponent implements OnInit {
  public isDarkTheme = false;
  public navList = [];

  constructor(private authenticationService: AuthenticationService, 
    private snackBar: MdSnackBar, private viewContainerRef: ViewContainerRef, private JsonDataService: JsonDataService) { }

  ngOnInit() {
    this.JsonDataService.getNavLinks().subscribe(resJsonData => this.getdata(resJsonData));
  }

  // getdata for navigations
  getdata(jsonData) {
    this.navList = jsonData;
  }
  toggleTheme() {
    if (this.isDarkTheme === true) {
      this.isDarkTheme = false;
    } else {
      this.isDarkTheme = true;
    }
  }

  // snackBar for notification
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // on logout click
  logout() {
    this.authenticationService.logout();
    this.openSnackBar('Successfully', 'Logged Out');
  }
}
