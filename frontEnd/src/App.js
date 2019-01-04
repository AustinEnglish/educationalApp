import React, { Component } from 'react';
import './App.css';
import Calendar from './calendar.js'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'
import notebookPng from './media/notebook.png'
class App extends Component {
  state = {

    user: null,
    loggedIn: false,
    name: "",
    password: ""


  }

 

  loginUser = () => {

    var session_url = 'http://localhost:5000/user/login/';
     axios.post(session_url, { name: this.state.name }, {
      auth: { username: this.state.name, password: this.state.password }
    }).then((response)=> {
      console.log(response.data.data[0])
      this.setState({ user: response.data.data[0], loggedIn:true })
      console.log(this.state.user.Events);
    }).catch(function (error) {

    });


  }


  render() {
    return (
      <div id="App">
        {
          !this.state.loggedIn && (
<<<<<<< HEAD
            <form className="form-inline">
              <div className= "login">
                <div>
                  <input type='text'
                    className="form-control name-input"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })} />

                  <input type='text'
                    className="form-control password-input"
                    placeholder="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })} />
                </div>
                <div>
                  <button type='submit' className='btn btn-primary add-button reg-buttons sub-button' onClick={this.loginUser}> Login </button>
                </div>
=======
            <div>
              <div>
                <input type='text'
                  className="form-control"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })} />
                  

                <input type='text'
                  className="form-control"
                  placeholder="password"
                  value={this.state.password}
                  onChange={(e) => this.setState({ password: e.target.value })} />
              </div>
              <div>
                <button type='submit' className='btn btn-primary add-button reg-buttons sub-button' onClick={this.loginUser}> Login </button>
>>>>>>> eaa9ca77c6538dbca9f37f60d56f1d2c5a6e9f7f
              </div>
            </form>
          )}

        {
          this.props.loggedIn && this.props.user &&(
          <div>

            <div>

              <h1 id="title">Plan Ahead</h1>
              <img src={notebookPng} alt='' />
            </div>
            <Calendar user={this.props.user} />

          </div>
          )}

      </div>


    );
  }
}
export default App;