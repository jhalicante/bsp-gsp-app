import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmsComposePage } from './sms-compose';

@NgModule({
  declarations: [
    SmsComposePage,
  ],
  imports: [
    IonicPageModule.forChild(SmsComposePage),
  ],
})
export class SmsComposePageModule {}
