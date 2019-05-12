import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {

  public smsList : any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsPage');
    this.loadSMS();
  }

  loadSMS() {
    
    this.api.getAllSMS().subscribe( (res : any) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.smsList = res.responseData;
      }
    });
  }
}
