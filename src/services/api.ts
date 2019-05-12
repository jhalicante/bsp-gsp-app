import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import { AlertProvider } from './alert';

@Injectable()
export class ApiProvider {
    
    public apiURL : string;

    constructor(
        public alert : AlertProvider,
        public http: Http) {
        
        // PROD API https://bsp-gsp.herokuapp.com
        // this.apiURL = localStorage.getItem('ip_address')  + '/api/v1';

        // DEV API http://localhost:8888
        this.apiURL = localStorage.getItem('ip_address') +'/bsp-gsp-web/api/v1';
    }
  
    public signin(data : any) {
        let observable = new Observable(observer => {
            this.http.post(this.apiURL+'/m/signin', JSON.stringify(data))
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                this.alert.showAlert('Sign In', 'Connection failed!');
            });
        });
        return observable;
    }

    public signup(data : any) {
        let observable = new Observable(observer => {
            this.http.post(this.apiURL+'/m/signup', JSON.stringify(data))
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                this.alert.showAlert('Sign Up', 'Connection failed!');
            });
        });
        return observable;
    }

    public getAllSchool() {
        let observable = new Observable(observer => {
            this.http.get(this.apiURL + '/m/get-all-school')
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                console.log(error);
                this.alert.showAlert('Get All School', 'Connection failed!');
            });
        });
        return observable;
    } 
}
