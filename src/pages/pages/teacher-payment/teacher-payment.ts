import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-teacher-payment',
  templateUrl: 'teacher-payment.html',
})
export class TeacherPaymentPage {

  public invoiceList : any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
  }

  ionViewDidLoad() {
    this.loadInvoiceList();
  }

  loadInvoiceList() {
    let teacher_id = localStorage.getItem('user_id');
    this.api.getTeacherPayment(teacher_id).subscribe( (res: any) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.invoiceList = res.responseData;
      }
    });
  }

}
