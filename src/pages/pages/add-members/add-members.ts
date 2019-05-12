import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-add-members',
  templateUrl: 'add-members.html',
})
export class AddMembersPage {

  public genBatch : any[] = [];
  public schoolList : any[] = [];

  public school_id: string;
  public fname: string;
  public mname: string;
  public lname: string;
  public gender: string;
  public batch: string;
  public scout: string;
  public amount: string;
  public grade: string;
  public address: string;
  public bdate: string;
  public age: string;
  public religion: string;
  public guard_name: string;
  public guard_name_no: string;
  public teacher_id: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
    
    var from = new Date();

    for (let year = from.getFullYear()+1; year > 2000; year--) {
        var plusOne = year;
        this.genBatch.push((plusOne - 1) + '-' + year );
    }
  }

  ionViewDidLoad() {
    this.loadSchool();
  }

  registerStudent() {
      var formData = {
        school_id: this.school_id,
        fname: this.fname,
        mname: this.mname,
        lname: this.lname,
        gender: this.gender,
        batch: this.batch,
        scout: this.scout,
        amount: this.amount,
        grade: this.grade,
        address: this.address,
        bdate: this.bdate,
        age: this.age,
        religion: this.religion,
        guard_name: this.guard_name,
        guard_name_no: this.guard_name_no,
        teacher_id: localStorage.getItem('user_id')
    };

    this.alert.showLoading('Please wait...');
    
    this.api.registerStudent(formData).subscribe( ( res : any) => {
        console.log(res);
        this.alert.hideLoading();
        if (res.errorCode == 0) {
            this.alert.showAlert('Register Student', res.message);
            this.navCtrl.pop();
        }
        else {
            this.alert.showAlert('Register Student', res.message);
        }
    });
  }

  loadSchool() {
    this.api.getAllSchool().subscribe( ( res:any ) => {
      console.log(res);
      if(res.errorCode == 0) {
        this.schoolList = res.responseData;
      }
    });
  }

}
