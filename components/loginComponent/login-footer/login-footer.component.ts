import { JsonDataService } from './../../../services/json-data.service';
import { Component, OnInit } from '@angular/core';
//import { JsonDataService } from 'app/services/json-data.service';

@Component({
  selector: 'app-login-footer',
  templateUrl: './login-footer.component.html',
  styleUrls: ['./login-footer.component.css'],
  providers: [JsonDataService]
})
export class LoginFooterComponent implements OnInit {

  public languages = [];
  constructor(private JsonDataService: JsonDataService) { }

  ngOnInit() {
    // getting languages form json file
    this.JsonDataService.getLanguages().subscribe(resJsonData => this.getdata(resJsonData));
  }
  getdata(jsonData) {
    this.languages = jsonData;
  }
}
