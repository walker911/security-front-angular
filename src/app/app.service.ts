import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
    
    authenticated = false;

    constructor (private http : HttpClient) {
    }

    authenticate(credentials, callback) {
        const headers = new HttpHeaders(credentials ? {
            Authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('api/user/check', {headers: headers}).subscribe(response => {
            console.log(response);
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        })
    }
}