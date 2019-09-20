import React, {Component} from 'react';
import './login.css';
import login from '../new_login.png';
import { withRouter , Redirect} from 'react-router-dom';


class Login extends Component{
    constructor(props){
        super(props);
        this.onChange =this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);       
    }
onChange(e){
    this.setState({
        [e.target.name]: e.target.value
})
}
    handleSubmit = (event) => {
        event.preventDefault();
        const uname=this.refs.uname.value;
        const password=this.refs.password.value;
        this.props.auth({uname, password});
    }
    render(){
        if(this.props.isLoginLoading==true){
            return(<div className="icon"><i className="fas fa-spinner fa-3x fa-pulse text-primary ic"></i></div>);
        }
        if (this.props.Loggedin){
            if(this.props.user.type.name=="Review"){
                return <Redirect to="/admin"></Redirect>
            }
            else return <Redirect to ="/home"></Redirect>
        }
        else{
        return(<div className="back">
            <div className="container login-card ">
        <form className="log" onSubmit={this.handleSubmit}>  
        <div className="container ">

        <div className="imgcontainer">
        <img src={login} alt="login_image"></img>
        </div>
        <br/>
        <div className="container">
        
        <label value="uname"><b>Username </b></label><br/>
        {/* <input type="text" placeholder="Enter Username" name="uname" value={this.state.uname} onChange={this.onChange} required></input> */}
        <input type="text" ref="uname" placeholder="Enter Username" name="uname" required></input>
        <br/>
        <label value="password"><b>Password </b></label><br/>
       {/* <input type="password" placeholder="Enter Password" name="password"  value={this.state.password} onChange={this.onChange} required></input> */}
       <input type="password" ref="password" placeholder="Enter Password" name="password" required></input>
        <br/>
        <button type="submit">Login</button>
     
      </div>
    </div>
   </form>
   </div>
</div>

        )};
    }
}

export default withRouter(Login);

  
  //<div class="container" style="background-color:#f1f1f1">
