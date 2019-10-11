import React,{Component} from 'react';
import './manage_user.css';
import { Link } from 'react-router-dom';

class Manage extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.listUsers();
    }
    render()
    {   let users=[];
        for (let i=0;i<this.props.users.length;i++){
                users.push(
                    <tr>
                        <td>{this.props.users[i].firstname+' '+this.props.users[i].lastname}</td> <td>{this.props.users[i].username}</td> <td>{this.props.users[i].usertype}</td><td><Link to ={'/Edit/'+this.props.users[i]._id}><button className="btn btn-info">Edit</button></Link> </td><td><button className="btn btn-secondary">Delete</button></td>
                    </tr>
                )
        }
        return(<div className="container">
                <nav className="navbar-nav">
                    <div className="row">
                    <h1 className=" col-sm-11 navbar-text"><center><b>Manage Users</b></center> </h1><Link className="col-sm-1 " to='/signup'><button className="btn btn-primary">Add</button></Link>
                    </div>
                    <hr/>
                </nav>
                <div>
                    <table className=" table-striped  table-bordered text-center table-hover text-align-center table table-responsive ">
                        <tbody className="tbhh">
                        <tr>
                            <th>Name</th> <th> Email</th> <th> User-Type</th><th></th>
                        </tr>
                    {users} 
                    </tbody>
                    </table>
                </div>
                </div>

        );
    }
}
export default Manage;
