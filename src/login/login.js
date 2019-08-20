import React, {Component} from 'react';
import './login.css';
import login from '../login_icon.png';
import { withRouter } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Works");
        this.props.history.push('/home')
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit} method="post">  
        <div className="container">
            <br/>
            <br/>
        <div className="imgcontainer">
        <img src={login} alt="login_image"></img>
        </div>
        <br/>
        <br/>
        <div className="container">
        
        <label for="uname"><b>Username </b></label>
        <input type="text" placeholder="Enter Username" name="uname" required></input>
        <br/>
        <label for="psw"><b>Password </b></label>
       <input type="password" placeholder="Enter Password" name="psw" required></input>
        <br/>
        <button type="submit">Login</button>
     
      </div>
    </div>
   </form>
   

        );
    }
}

export default withRouter(Login);

  
  //<div class="container" style="background-color:#f1f1f1">
