
import React, { Component } from 'react';
import './App.css';

import BigCalendar from 'react-big-calendar';
import moment, { calendarFormat } from 'moment';
import axios from 'axios'

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class Calendar extends Component {
  state={
    user: this.props.user,
    events:[],
    startTime: "",
    endTime: "",
    allday: "",
    className: ""

    
  }


//    update = () =>{

// var tempObj = {};

// tempObj.allDay = false;
// tempObj.startDate = this.state.startTime
// tempObj.endDate = this.state.endTime
// tempObj.title = this.state.className

// this.state.user.events.push(tempObj);

// axios.put(`http://localhost:3000/api/users/updateUser/` + this.state.user._id, this.state.user )
//       .then(res => {
//         console.log(res.data);
//         this.setState({
//           events: res.data.data.Events
//         })
//       })



//  }




  componentDidMount(){

    console.log(this.props.user.Events)
    //this.setState({events:this.state.user.Events})
    console.log(this.state.user._id);

  

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