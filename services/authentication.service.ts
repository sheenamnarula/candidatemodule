import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Service for Authentication
// having two methods login and logout
// If login then set the user in the localstorage.
// if logout remove the user from localstorage.

@Injectable()
export class AuthenticationService {
    public token: string;
    private headers = new Headers({ 'Content-Type': 'application/json'});
    
    constructor(private http: Http, private router: Router) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<string> {
        return this.http.post('/auth', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json().authToken;
                if (token) {
                    console.log(token);
                    // set token property
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token,role:response.json().role }));
                    // return true to indicate successful login
                    return response.json();
                } else {
                    // return false to indicate failed login
                    return response.json();
                }
            });
    }

  logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;

        localStorage.removeItem('currentUser');
        this.router.navigate(['/'])
    }
}
