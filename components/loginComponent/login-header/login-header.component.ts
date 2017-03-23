import { JsonDataService } from './../../../services/json-data.service';
import { Component, OnInit } from '@angular/core';
//import { JsonDataService } from 'app/services/json-data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css'],
  providers: [JsonDataService]
})
export class LoginHeaderComponent implements OnInit {

  public languages = [];

  constructor(private JsonDataService: JsonDataService, private router: Router) { }

  ngOnInit() {
    // getting languages form json file
    this.JsonDataService.getLanguages().subscribe(resJsonData => this.getLanguages(resJsonData));
  }
  getLanguages(jsonData) {
    this.languages = jsonData;
  }
  public verifyEmail() {
    this.router.navigate(['/verifyEmail']);
  }

  public login() {
    this.router.navigate(['/login']);
  }
}
