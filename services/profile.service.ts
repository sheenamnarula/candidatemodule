import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  constructor(private http: Http, private router: Router) { }

  create() {
    return this.http.get('')
      .map((response: Response) => response.json());
  }

  read(username: any) {
    let uname:Object
    console.log(username);
    return this.http.get('profile/',uname)
      .map((response: Response) => response.json());
  }

  update() {
    return this.http.get('')
      .map((response: Response) => response.json());
  }

  delete() {
    return this.http.get('')
      .map((response: Response) => response.json());
  }

}
