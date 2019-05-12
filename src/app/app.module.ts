import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';

// Pages

import { MembersPage } from '../pages/pages/members/members';
import { AddMembersPage } from '../pages/pages/add-members/add-members';
import { SmsPage } from '../pages/pages/sms/sms';
import { ActivityPage } from '../pages/pages/activity/activity';
import { LocationPage } from '../pages/pages/location/location';
import { PaymentPage } from '../pages/pages/payment/payment';
import { TeacherListPage } from '../pages/pages/teacher-list/teacher-list';


// Providers
import { AlertProvider } from '../services/alert';
import { ApiProvider } from '../services/api';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrationPage,
    
    MembersPage,
    AddMembersPage,
    SmsPage,
    ActivityPage,
    LocationPage,
    PaymentPage,
    TeacherListPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrationPage,
    
    MembersPage,
    AddMembersPage,
    SmsPage,
    ActivityPage,
    LocationPage,
    PaymentPage,
    TeacherListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AlertProvider,
    ApiProvider
  ]
})
export class AppModule {}
