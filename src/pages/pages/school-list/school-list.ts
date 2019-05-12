import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-school-list',
  templateUrl: 'school-list.html',
})
export class SchoolListPage {

  public schoolList : any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherListPage');
    this.loadSchoolList();
  }

  loadSchoolList() {
    this.api.getAllSchool().subscribe( (res: any) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.schoolList = res.responseData;
      }
    });
  }

}
