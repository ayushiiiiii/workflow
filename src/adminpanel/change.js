import React ,{Component} from 'react';
class Change extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        
        if(this.refs.newpassword.value===this.refs.retypepassword.value){
            const pass={
                oldPassword: this.refs.oldpassword.value,
                newPassword:this.refs.newpassword.value,
               
            }
            this.props.resetPassword(pass);
        }else{
            alert("Check your password");
        }
    }
    render(){
        return(
            <div className="container"  aria-labelledby="headingOne">

                     <div>
                        <form className=" log form-group " onSubmit={this.handleSubmit} method="post"  >
                                <h1>Change Password </h1>
                                <hr/>
                                <label value="oldpassword" htmlFor="oldpassword"><b>Current password</b></label>
                                <input ref="oldpassword" type="Password" placeholder="Enter Old password" name="oldpassword" required/>

                                <label value="newpassword" htmlFor="newpassword"><b>New Password </b></label>
                                <input ref="newpassword" type="password" placeholder="Enter New Password" name="newpassword" />

                                <label value="retypepassword" htmlFor="retypepassword"><b>confirm password</b></label>
                                <input ref="retypepassword" type="password" placeholder="confirm password" name="retypepassword" required/>
                            <button type="submit" >submit</button>
                        </form>
                       
                     </div>  
            </div>
        

        );
    }
}
export default Change;