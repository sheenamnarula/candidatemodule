import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Router } from '@angular/router';
// import { LoginComponent } from 'app/components/loginComponent/login/login.component';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

@Injectable()
export class JsonDataService {

  // url to get pincode info
  public mygovKey = 'bb69790db92cb17b4b5c8b3bf4f9fc02';
  private urlPincode = 'https://data.gov.in/api/datastore/resource.json?resource_id=6176ee09-3d56-4a3b-8115-21841576b2f6&api-key='
  + this.mygovKey + '&filters[pincode]=';

  // url to retrive data from json file for candidate navLinks
  private urlNavlinks = 'auth/nav-menus';

  // url to get langauges
  private urlLanguages = 'resources/languages';

  // url to get profession
  private urlProfession = 'resources/profession';

  // url to get locations
  private urlLocations = 'resources/locations';

  // url to get placementCenter
  private urlPlacementCenter = 'resources/placementCenter';

  constructor(private http: Http, private snackBar: MdSnackBar, private router: Router) { }

  // snackbar notifications
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  // Store Registration details in database
  registerUser(formData): any {
    return this.http.post('/candidates', formData).map(data =>
      data.json()
      , error => {
        error.json();
        console.log('GOT ERROR');
        console.log(error.json());

      });
  }

  // get data for by verify email in database
  getEmail(email) {
    return this.http.get('http://localhost:3000/api/checkEmail?email=' + email).map((response: Response) => [
      response['_body'], console.log(response['_body'])]);
  };

  // get json data for candidate navigatin links
  getNavLinks(token) {

    return this.http.get(this.urlNavlinks, this.authoriZation(token)).map((response: Response) => response.json());
  };

  // get json data for langauges
  getLanguages() {
    return this.http.get(this.urlLanguages).map((response: Response) => response.json());
  };

  // get json data for candidate register locations
  getLocations() {
    return this.http.get(this.urlLocations).map((response: Response) => response.json());
  };

  // get json data for candidate register profession
  getProfession() {
    return this.http.get(this.urlProfession).map((response: Response) => response.json());
  };

  // get json data for placementCenter
  getPlacementCenter() {
    return this.http.get(this.urlPlacementCenter).map((response: Response) => response.json());
  };

  // get json data for pincode details
  getPincode(pincode) {
    return this.http.get(this.urlPincode + pincode)
      .map((response: Response) => response.json());
  };

  verifyToken(token) {
    return this.http.post("/auth/verify-email", { token: token }).map((response: Response) => response.json());
  }

  verifyEmail(email) {
    return this.http.post("auth/register-email", { username: email }).map((response: Response) => response.json());
  }
  
  verifyUser(email) {
    return this.http.post("auth/verify-user", { username: email }).map((response: Response) => response.json());
  }
  private authoriZation(userToken) {
    if (userToken) {
      let headers = new Headers({ 'Authorization': userToken });
      return new RequestOptions({ headers: headers });
    }

  }


}
