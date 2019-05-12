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

    public getAllStudents(teacher_id : string) {

        let url : string;

        if(localStorage.getItem('role') == 'admin') {
            url = this.apiURL + '/m/get-all-student';
        }
        else {
            url = this.apiURL + '/m/get-all-student?user_id='+teacher_id;
        }

        let observable = new Observable(observer => {
            this.http.get(url)
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
    
    public getAllSMS() {
        let observable = new Observable(observer => {
            this.http.get( this.apiURL + '/m/get-all-sms')
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                console.log(error);
                this.alert.showAlert('Get All SMS', 'Connection failed!');
            });
        });
        return observable;
    }

    public getAllEvents() {
        let observable = new Observable(observer => {
            this.http.get( this.apiURL + '/m/get-all-events')
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                console.log(error);
                this.alert.showAlert('Get All Activity', 'Connection failed!');
            });
        });
        return observable;
    }

    public getAllLocation() {
        let observable = new Observable(observer => {
            this.http.get( this.apiURL + '/m/get-all-locations')
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                console.log(error);
                this.alert.showAlert('Get All Location', 'Connection failed!');
            });
        });
        return observable;
    }

    public getPayment() {
        let observable = new Observable(observer => {
            this.http.get( this.apiURL + '/m/get-payment')
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                console.log(error);
                this.alert.showAlert('Get All Payment', 'Connection failed!');
            });
        });
        return observable;
    }

    public teacherList() {
        let observable = new Observable(observer => {
            this.http.get( this.apiURL + '/m/get-all-teachers')
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                console.log(error);
                this.alert.showAlert('Get All Teachers', 'Connection failed!');
            });
        });
        return observable;
    }

    public registerStudent(data : any) {
        let observable = new Observable(observer => {
            this.http.post(this.apiURL + '/m/register-student', JSON.stringify(data))
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                this.alert.showAlert('Register Student', 'Connection failed!');
            });
        });
        return observable;
    }

    public getTeacherPayment(teacher_id : string) {
        let observable = new Observable(observer => {
            this.http.get( this.apiURL + '/m/get-teacher-payment?teacher-id='+teacher_id)
            .map(res => res.json())
            .subscribe(data => {
                observer.next(data);
            }, error => {
                console.log(error);
                this.alert.showAlert('Get Teacher Payment', 'Connection failed!');
            });
        });
        return observable;
    }
}
