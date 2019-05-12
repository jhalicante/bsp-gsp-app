import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';

// Admin
import { MembersPage } from '../pages/pages/members/members';
import { SmsPage } from '../pages/pages/sms/sms';
import { ActivityPage } from '../pages/pages/activity/activity';
import { LocationPage } from '../pages/pages/location/location';
import { PaymentPage } from '../pages/pages/payment/payment';
import { TeacherListPage } from '../pages/pages/teacher-list/teacher-list';
import { SchoolListPage } from '../pages/pages/school-list/school-list';
import { TeacherPaymentPage } from '../pages/pages/teacher-payment/teacher-payment';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  public fullname : string = '';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.loadNavigations();

    setInterval( () => {
      if( localStorage.getItem('user_id') != null ) {
        this.loadNavigations();
      }
    }, 1000);

  }

  loadNavigations() {
    if(localStorage.getItem('fullname') != null ) {
      this.fullname = localStorage.getItem('fullname');
    }

    if(localStorage.getItem('role') == null) { 
      this.rootPage = LoginPage;
    }
    
    if(localStorage.getItem('role') == 'admin') {

      this.rootPage = MembersPage;

      this.pages = [
        { title: 'Members', component: MembersPage },
        { title: 'SMS', component: SmsPage },
        { title: 'Activity', component: ActivityPage },
        { title: 'Location', component: LocationPage },
        { title: 'Invoice', component: PaymentPage },
        { title: 'Teacher List', component: TeacherListPage },
        { title: 'School List', component: SchoolListPage }
      ];
    }

    if(localStorage.getItem('role') == 'teacher') {

      this.rootPage = MembersPage;

      this.pages = [
        { title: 'Student List', component: MembersPage },
        { title: 'Activity', component: ActivityPage },
        { title: 'Location', component: LocationPage },
        { title: 'Invoice List', component: TeacherPaymentPage },
      ];
    }
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      // let status bar overlay webview
      // this.statusBar.overlaysWebView(true);

      // set status bar to white
      this.statusBar.backgroundColorByHexString('#32db64');
      this.splashScreen.hide();

      // DEV
      // localStorage.setItem('ip_address', 'http://localhost:8888');
      // PROD
      localStorage.setItem('ip_address', 'https://bsp-gsp.herokuapp.com');

    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  logout() {
    localStorage.removeItem('fullname');
    localStorage.removeItem('role');
    localStorage.removeItem('user_id');
    this.nav.setRoot(LoginPage);
  }
}
