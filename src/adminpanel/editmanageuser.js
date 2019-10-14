import React, {Component } from 'react';
import './excel.css';
import Ad from '../pluss.png';
import { tsConstructorType } from '@babel/types';

class Editmanage extends Component{
    constructor(props){
        super(props);
        this.state={
            found: false,
            user: null
        }
    }
    componentDidMount(){
        this.props.users.forEach(user => {
            if(user._id==this.props.userId){
                this.setState({user: user, found: true});
                return false;
            }
        });
        if(!this.state.found){
            this.props.listUsers();
        }
    }
    render(){
        
      if(this.state.found){
        return(
                <div className= "container">
                    <nav className="navbar">
                        <h3> Edit Users</h3>
                    </nav>
                    <form onSubmit="" >
                    <div className="row">
                             <label htmlFor="email"><h5><b>Email</b></h5></label>
                             <input type="text" ref="email" value={this.state.user.username} required></input><br/>
                        </div>
                        <div className="row">
                                 <label htmlFor="First_name"><h5><b>First Name</b></h5></label>
                                 <input type="text" ref="First_name" value={this.state.user.first_name}required></input></div>
                        <div className="row">
                                 <label htmlFor="Last_name"><h5><b>Last_Name</b></h5></label>
                                 <input type="date" ref="Last_Name" value={this.state.user.last_name} required></input><br/>
                        </div>
                        <div className="row">
                          <label htmlFor="user_type"><h5><b>User Type</b></h5></label>
                          <select ref="user_type"  required>
                          <option value="Review" selected>Review</option>
                          <option value="Admin">Admin</option>
                          <option value="GB">GB</option>
                          <option value="User Operator">User operator</option>
                          <option value="Data Entry">Data Entry</option>
                          </select>
                          </div>
                          </form>
                          </div>
                                  );
        }else{
            return(<div></div>);
        }
    }
}

export default Editmanage;



