import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  public locationList : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
    this.loadLocation();
  }

  loadLocation() {
    this.api.getAllLocation().subscribe( (res : any) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.locationList = res.responseData;
      }
    });
  }

}
