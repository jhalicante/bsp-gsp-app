import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../services/api';
import { AlertProvider } from '../../services/alert';

import { MembersPage } from '../pages/members/members';
import { RegistrationPage } from '../registration/registration';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public username : string;
  public password : string;

  constructor(
    public navCtrl: NavController, 
    public api : ApiProvider,
    public alert : AlertProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if( (this.username != undefined || this.username != null) &&
      (this.username != undefined || this.username != null) ) {
      
      let fields = {
        username : this.username,
        password : this.password
      }
      
      this.alert.showLoading('Sign In Please Wait...');

      this.api.signin(fields).subscribe( (res : any) => {
        this.alert.hideLoading();

        console.log(res);

        if(res.errorCode == 0) {
          res = res.response;
          localStorage.setItem('fullname', res.fullname);
          localStorage.setItem('role', res.role);
          localStorage.setItem('user_id', res.user_id);
          this.navCtrl.setRoot(MembersPage);
        }
        else {
          this.alert.showAlert('Login', res.message);
        }
      });

    }
    else {
      this.alert.showAlert('Login', 'Some fields are empty');
    }
  }

  register() {
    this.navCtrl.push(RegistrationPage);
  }

}
