import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddMembersPage } from '../add-members/add-members'
import { MemberInfoPage } from '../member-info/member-info'

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  public role : string;

  public studentsList : any[] = [];

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public api : ApiProvider,
      public alert : AlertProvider) {
  }

  ionViewDidLoad() {
    this.role = localStorage.getItem('role');
    this.loadStudents();
  }

  addMember() {
    this.navCtrl.push(AddMembersPage);
  }

  loadStudents() {
    let user_id = localStorage.getItem('user_id');

    this.api.getAllStudents(user_id).subscribe( (res : any) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.studentsList = res.response;
      }
    });
  }

  viewStudentDetails(data : any) {
    this.navCtrl.push(MemberInfoPage, { data : data});
  }

}
