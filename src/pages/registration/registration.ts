import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../services/api';
import { AlertProvider } from '../../services/alert';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  public schoolList : any[] = [];

  public fullname : string;
  public school : string;
  public phone : string;
  public username : string;
  public password : string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider
    ) {
  }

  ionViewDidLoad() {
    this.loadSchool();
  }

  loadSchool() {
    this.api.getAllSchool().subscribe( ( res:any ) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.schoolList = res.responseData;
      }
    });
  }

  register() {

    let fields = {
      fullname : this.fullname,
      school : this.school,
      phone : this.phone,
      username : this.username,
      password : this.password,
    }

    this.alert.showLoading('Sign In Please Wait...');

    if( 
      (this.fullname != null || this.fullname != '' ) ||
      (this.school != null || this.school != '' ) ||
      (this.phone != null || this.phone != '' ) ||
      (this.username != null || this.username != '' ) ||
      (this.password != null || this.password != '' ) ||
      this.phone.length == 10) {

        this.api.signup(fields).subscribe( (res : any) => {
      
          this.alert.hideLoading();
    
          if(res.errorCode == 0) {
            this.alert.showAlert('Register', res.message);
            this.navCtrl.pop();
          }
          else {
            this.alert.showAlert('Register', res.message);
          }
        });
    }

    else {
      this.alert.showAlert('Register', 'Some fields are empty');      
    }

  }

}
