import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-members',
  templateUrl: 'add-members.html',
})
export class AddMembersPage {

  public genBatch : any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    var from = new Date();

    for (let year = from.getFullYear()+1; year > 2000; year--) {
        var plusOne = year;
        this.genBatch.push((plusOne - 1) + '-' + year );
    }
  }

  ionViewDidLoad() {
    console.log(this.genBatch);
  }

}
