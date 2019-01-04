// import React, { Component } from 'react';
// import './App.css';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import axios from 'axios'

// class Login extends Component {
//   state = {

//     user: null,
//     loggedIn: false,
//     name: "",
//     password: ""

//   }

//   componentDidMount() {



// }

//   loginUser = () => {

//     var session_url = 'http://localhost:5000/user/login/';
//      axios.post(session_url, { name: this.state.name }, {
//       auth: { username: this.state.name, password: this.state.password }
//     }).then((response)=> {
//       console.log(response.data.data[0])
//       this.setState({ user: response.data.data[0], loggedIn:true })
//       console.log(this.state.user.Events);
//     }).catch(function (error) {

//     });

//   }


//   render() {
//     return (
//       <div>
//         {
//           !this.state.loggedIn && (
//             <form className="form-inline">
//               <div className= "login">
//                 <div>
//                   <input type='text'
//                     className="form-control"
//                     placeholder="Name"
//                     value={this.state.name}
//                     onChange={(e) => this.setState({ name: e.target.value })} />

//                   <input type='text'
//                     className="form-control"
//                     placeholder="password"
//                     value={this.state.password}
//                     onChange={(e) => this.setState({ password: e.target.value })} />
//                 </div>
//                 <div>
//                   <button type='submit' className='btn btn-primary add-button reg-buttons sub-button' onClick={this.loginUser}> Login </button>
//                 </div>
//               </div>
//             </form>
//           )}
//       </div>
//     );
//   }
// }
// export default Login;