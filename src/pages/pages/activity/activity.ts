import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../../services/api';
import { AlertProvider } from '../../../services/alert';

@IonicPage()
@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  
  calendarOptions:any ;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.loadActivity();
  }

  loadActivity() {
    this.api.getAllEvents().subscribe( (res : any) => {
      console.log(res)
      if(res.errorCode == 0) {
        this.loadCalendar(res.responseData);
      }
    })
  }

  loadCalendar(data : any){
    
    var dates = [];

    var color = ['red', 'blue', 'green', 'violet', 'orange', 'pink', 'neon'];
    
    for (var i = 0; i < data.length; i++) {
        var selectedColor = color[Math.floor(Math.random() * color.length)];
        data[i].color = selectedColor;
        dates.push(data[i]);
    }
    
    this.calendarOptions = {
      header: {
        left: 'title',
        right: 'month,agendaWeek,agendaDay,agendaFourDay,'
      },
      footer: {
        right: 'today prev,next',   
      },
      views: {
        agendaFourDay: {
            type: 'listYear',
            buttonText: 'All'
        }
      },
      height: 'parent',
      fixedWeekCount : false,
      defaultDate: Date(),
      editable: true,
      allDay : true,
      eventClick: (event) => {
        console.log(event);
        alert('Event Name: ' + event.title +
              '\nPlace: ' + event.place +
              '\nAddress: ' + event.address);
      },
      dayClick: (date, jsEvent, view, resourceObj) => {
       console.log('Date: ' + date.format());
      },
      eventLimit: true, // allow "more" link when too many events
        events: dates
    };
  }

}
