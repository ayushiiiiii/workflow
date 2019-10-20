import React, {Component } from 'react';
import './excel.css';
import Ad from '../pluss.png';
import { tsConstructorType } from '@babel/types';

class Editmanage extends Component{
    constructor(props){
        super(props);
        let user=null,found=false;
        for(let i=0;i<this.props.users.length;i++){
            if(this.props.users[i]._id==this.props.userId){
                user= this.props.users[i];
                found= true;
                break;
            }
        }
        this.state={
            user: user,
            found: found
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount(){
        
        if(this.state.found===false) this.props.listUsers();
    }
    onChange(f){
        let user=this.state.user;
        user[f]=this.refs[f].value;
        this.setState({user: user, found: true})
    }
    handleSubmit(){
        this.props.user(this.props.usertId, this.props.user._id, {
            username: this.state.username,
            firstname: this.state.first_name,
            lastname: this.state.last_name,
            user_type: this.state.user_type,
            })
        }
    render(){
    if(this.state.found===true){
        return(
                <div className= "container ex">
                    <nav className="navbar">
                        <center><h3> Edit Users</h3></center>
                    </nav>
                    <form className=" ex form-group container-fluid formm">
                    <div className="row">
                                <label htmlFor="username"><h5><b>Email</b></h5></label>
                                <input type="text" ref="username" value={this.state.user.username} onChange={() => this.onChange("username")} required></input><br/>
                        </div>
                        <div className="row">
                                    <label htmlFor="Firstname"><h5><b>First Name</b></h5></label>
                                    <input type="text" ref="firstname" value={this.state.user.firstname}  onChange={() => this.onChange("firstname")} required></input></div>
                        <div className="row">
                                    <label htmlFor="Lastname"><h5><b>Last_Name</b></h5></label>
                                    <input type="text" ref="lastname" value={this.state.user.lastname}  onChange={() => this.onChange("lastname")} required></input><br/>
                        </div>
                        <div className="row">
                            <label htmlFor="user_type"><h5><b>User Type</b></h5></label>
                            <select ref="user_type"   onChange={() => this.onChange("user_type")} required>
                            <option value="Review" selected>Review</option>
                            <option value="Admin">Admin</option>
                            <option value="GB">GB</option>
                            <option value="User Operator">User operator</option>
                            <option value="Data Entry">Data Entry</option>
                            </select>
                            </div>
                            <button type="submit" onClick={this.handleSubmit} > Submit</button>
                            </form>
                            </div>
                                    );
    }else{
        return(<div></div>);
    }
    }
}

export default Editmanage;



