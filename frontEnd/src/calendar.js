
import React, { Component } from 'react';
import './App.css';

import BigCalendar from 'react-big-calendar';
import moment, { calendarFormat } from 'moment';

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class Calendar extends Component {
  state={
    events:[],

    dummyEvents : [
   {
     allDay: false,
     startDate: new Date('January 03, 2019 10:00:00'),
     endDate: new Date('January 03, 2019 10:30:00'),
     title: 'class1',
   },
   {
     allDay: false,
     startDate: new Date('January 03, 2019 10:00:00'),
     endDate: new Date('January 03, 2019 10:30:00'),
     title: 'class1',
   },
 ]
  }

  componentDidMount(){

console.log(this.props.user.Events)
    this.setState({events:this.props.user.Events})

  

    for(var i = 0;i<this.props.user.Events.length;i++){
        delete this.props.user.Events[i]._id;

         var temp =  new Date(this.props.user.Events[i].startDate)
         this.props.user.Events[i].startDate = temp;

         var temp =  new Date(this.props.user.Events[i].endDate)
         this.props.user.Events[i].endDate = temp;


        this.state.events.push(this.props.user.Events[i]);
        console.log(this.props.user.Events[i]);
    }

    console.log(this.state.events);

  }


  

render() {
 return (
    <div>
    <h2>Welcome to your own personal scheduler {this.props.user.name}</h2>
    {
      this.state.events &&(
        <BigCalendar
        defaultView='week'
        views={['week']}
        localizer={localizer}
         events={this.state.events}
         startAccessor="startDate"
         endAccessor="endDate"
       />
      )}
    </div>
 )
}
}
export default Calendar;