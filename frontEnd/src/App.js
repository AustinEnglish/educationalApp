import React, { Component } from 'react';
import './App.css';
import Calendar from './calendar.js'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'
import notebookPng from './media/notebook.png'
class App extends Component {

 componentDidMount() { 
   //Fetch events from database here
 }
render() {
    return (
      <div id="App">
      <div>
        <h1 id= "title">Plan Ahead</h1>
        <img src={notebookPng} alt=''/>
      </div>
        <Calendar />
      </div>
    );
  }
}
export default App;