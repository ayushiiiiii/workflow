import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import './myinfo.css';

class Info extends Component{
    constructor(props){
        super(props);
            this.handleSubmit=this.handleSubmit.bind;
        
    }
    componentDidMount(){
        this.props.listUsers();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Clicked");
        const pass = {
            oldPassword:this.refs.oldPassword.value,
            newPassword:this.refs.newPassword.value,
            
         
        }
    }

    render()
    {
        return(

            <div className="container">
                <nav className="navbar nav">
                    <center><h1>Profile </h1></center>
                </nav>
                <br/>
                 <div className=" row ">
                        <div className="col">
                            <center><h3 ><b>Name</b></h3></center>
                        </div>
                        <div className="col"><h3>{this.props.users.firstname+' '+this.props.users.lastname} </h3>
                         </div>
                 </div>
                       <div className="row">
                           <div className="col">
                            <center><h3><b>Email</b></h3></center>
                           </div>
                            <div className="col"><h3>{this.props.users.username}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col"><center><h3><b> User-Type</b></h3></center>
                            </div>
                            <div className="col"><h3>{this.props.users.usertype}</h3>
                            </div>
                    </div>
                    <br/>

                            
                   <Link to='/details/changepassword'><button type="submit">Change password</button></Link>

                    
</div>
        );
    }
}

export default Info; 