import { UserService } from './../../services/user.service';
import { AuthenticationService } from './../../services/authentication.service';
import { ProfileService } from './../../services/profile.service';
// import { AuthenticationService } from 'app/services/authentication.service';
// import { UserService } from 'app/services/user.service';
import { SamProfileCardService } from './../../sam-profile-section-services/sam-profile-card.service';
import { SamProfileSectionPersonalinfoService } from './../../sam-profile-section-services/sam-profile-section-personalinfo.service';
import { SamProfileSectionSkillsService } from './../../sam-profile-section-services/sam-profile-section-skills.service';
import { Component, OnInit } from '@angular/core';
//import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ProfileService]
})
export class DashboardComponent implements OnInit {
  sections: any[];
  profileCardData: any;

  constructor(private authenticationService: AuthenticationService,
    //private appComponent: AppComponent,
    private profileService: ProfileService,
    private SamProfileSectionPersonalinfoService: SamProfileSectionPersonalinfoService,
    private SamProfileSectionSkillsService: SamProfileSectionSkillsService,
    private SamProfileCardService: SamProfileCardService) {
    this.sections = [
      SamProfileSectionPersonalinfoService.getPersonalInfo(),
      SamProfileSectionSkillsService.getSkills()
    ];
    this.profileCardData = SamProfileCardService.getProfileCardData();
  }

  ngOnInit() {
    console.log('invoke read function')
    this.read(JSON.parse(localStorage.getItem('currentUser'))["username"]);
  }

  create() {
    this.profileService.create();
  }

  read(username) {
    this.profileService.read(username).subscribe(resJsonData => {
      console.log(resJsonData);
    });
  }

  update() {
    this.profileService.update();
  }
  delete() {
    this.profileService.delete();
  }
}
