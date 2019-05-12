import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherPaymentPage } from './teacher-payment';

@NgModule({
  declarations: [
    TeacherPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherPaymentPage),
  ],
})
export class TeacherPaymentPageModule {}
