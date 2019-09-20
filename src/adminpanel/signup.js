import React, { Component } from 'react';
import { withRouter , Redirect} from 'react-router-dom';


class Sign extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.refs.password.value===this.refs.repeatpassword.value){
            var user={
                firstname:this.refs.first.value,
                lastname: this.refs.last.value,
                email:this.refs.email.value,
                password: this.refs.password.value,
                usertype :this.refs.user.value
            }
            this.props.addUser({user: user});;
        }else{
            alert("Check your password");
        }
    }

    render(){
        return(
            <form  onSubmit={this.handleSubmit} method="post" className="log form-group" >
                <div class="container-fluid">
                    <h1>Add User</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label value="first_name" htmlfor="first"><b>First Name</b></label>
                    <input ref="first" type="text" placeholder="Enter First Name" name="first" required/>

                    <label value="Last_name" htmlfor="last"><b>Last Name</b></label>
                    <input ref="last" type="text" placeholder="Enter Last Name" name="last" />

                    <label value="email" htmlfor="email"><b>Email</b></label>
                    <input ref="email" type="text" placeholder="Enter Email" name="email" required/>

                   
                    <label value="password" htmlfor="password"><b>Password</b></label>
                    <input type="password" ref="password" placeholder="Enter Password" name="psw" required/>

                    <label value= "passwordrepeat" htmlfor="repeatpassword"><b>Repeat Password</b></label>
                    <input type="password" ref="repeatpassword" placeholder="Repeat Password" name="psw-repeat" required/>


                    <label value="user" htmlfor="user"><b>User Type</b></label><br/><br/>
                    <select ref="user" className="dropdown">
                            <option value="User Operator" selected>User Operator</option>
                            <option value="Data Entry">Data Entry</option>
                            <option value="Review">Review</option>
                            <option value="GB" >GB</option>
                    </select><br/>
<br/>

                    <br/>
                    <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Sign Up</button>
                    </div>
                </div>
</form>


        );
    }
}

export default Sign ;