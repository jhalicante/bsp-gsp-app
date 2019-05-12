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
  
  public calendarOptions: Object;

  public show : boolean = false;

  public calendarOptionss: Object = {
    height: 'parent',
    fixedWeekCount : false,
    defaultDate: '2016-09-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2016-09-01'
      },
      {
        title: 'Long Event',
        start: '2016-09-07',
        end: '2016-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-09-11',
        end: '2016-09-13'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T10:30:00',
        end: '2016-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-09-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2016-09-28'
      }
    ]
  };



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public alert : AlertProvider) {
  }

  ngOnInit() {
    console.log('ionViewDidLoad ActivityPage');
    // this.loadActivity();
  }
  ngAfterViewInit(){
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

    var color = ['red', 'blue', 'maroon', 'purple', 'green', 'violet', 'orange', 'pink', 'neon'];
    
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
      defaultDate: new Date(),
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
      //  [{"ID":"2","event_id":"041020191554874614","name":"Camping","start_date_time":"2019-04-11T00:00","end_date_time":"2019-04-12T21:00","place":"Mariveles ","address":"19 Liberation Blvd, Vigan City, 2700 Ilocos Sur, Philippines","latitude":"17.57045463248881","longitude":"120.38687467575073","start":"2019-04-11T00:00","end":"2019-04-12T21:00","title":"Camping","color":"pink"},{"ID":"4","event_id":"051220191557636158","name":"Halalan","start_date_time":"2019-05-13T12:58","end_date_time":"2019-05-14T01:00","place":"Caloocan city","address":"St Marys Rd, Sydney NSW 2000, Australia","latitude":"-33.87065291106025","longitude":"151.21323435974125","start":"2019-05-13T12:58","end":"2019-05-14T01:00","title":"Halalan","color":"red"}]
    };
    this.show = true;

  }

  onCalendarInit(initialized: boolean) {
    console.log('Calendar initialized');
  }

}
