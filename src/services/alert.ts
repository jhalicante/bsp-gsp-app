import { AlertController, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertProvider {

  public loader : any;

  constructor(
      public loadingCtrl : LoadingController,
      public alertCtrl: AlertController) {
      console.log('Hello AlertProvider Provider');
  }

  showAlert(title : string, content : string) {
     let alert = this.alertCtrl.create({
       title: title,
       subTitle: content,
       buttons: ['OK']
     });
     alert.present();
  }

  showLoading(content) {
      this.loader = this.loadingCtrl.create({
        content: content,
      });
      this.loader.present();
  }

  public hideLoading() {
      this.loader.dismiss();
  }





}
