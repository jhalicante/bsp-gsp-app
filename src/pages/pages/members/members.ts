import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddMembersPage } from '../add-members/add-members'

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {

  public role : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.role = localStorage.getItem('role');
  }

  addMember() {
    this.navCtrl.push(AddMembersPage);
  }

}
