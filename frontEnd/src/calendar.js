import React from 'react';
import './App.css';

import BigCalendar from 'react-big-calendar';
import moment, { calendarFormat } from 'moment';

const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


const Calendar = props => {
 const dummyEvents = [
   {
     allDay: false,
     startDate: new Date('January 03, 2019 10:00:00'),
     endDate: new Date('January 03, 2019 10:30:00'),
     title: 'hi',
   },
   {
     allDay: true,
     end: new Date('January 04, 2019 11:13:00'),
     start: new Date('January 04, 2019 11:13:00'),
     title: 'All Day Event',
   },
 ];
 return (
    <div>
        <BigCalendar
        defaultView='week'
        views={['week']}
        localizer={localizer}
         events={dummyEvents}
         startAccessor="startDate"
         endAccessor="endDate"
       />
    </div>
 )
}
export default Calendar;