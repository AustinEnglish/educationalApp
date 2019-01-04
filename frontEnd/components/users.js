import React, { Component } from 'react';

class Users extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {
                    this.props.users.length > 0 && (
                        this.props.Users.map((user, index) => {
                            return(
                                <div key={index}>
                                    <p>{user.startDate}</p>
                                    <p>{user.endDate}</p>
                                    <p>{user.title}</p>
                                </div>
                            )
                        })
                    )
                }
            </div>
         );
    }
}
 
export default Users;