import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-teacher-list',
  templateUrl: 'teacher-list.html',
})
export class TeacherListPage {

  public teachersList : any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherListPage');
    this.loadTeacher();
  }

  loadTeacher() {
    this.api.teacherList().subscribe( (res: any) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.teachersList = res.responseData;
      }
    });
  }

}
