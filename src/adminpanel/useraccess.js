import React ,{Component} from 'react';
import Switch from 'react-toggle-switch'
import { baseUrl } from '../baseurl';
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css";

class UserA extends Component{
    constructor(props){
        super(props);
        this.state = {
            usertypes: [
                {
                    name: 'User Operator',
                    location_enable: true,
                    location_view: true,
                    upload: true,
                    comments: true,
                    file_access: true,
                    data_entry: true,
                    download: true,
                    admin: true,
                    offer_details: true
                },
                {
                    name: 'Data Entry',
                    location_enable: true,
                    location_view: true,
                    upload: true,
                    comments: true,
                    file_access: true,
                    data_entry: true,
                    download: true,
                    admin: true,
                    offer_details: true
                },
                {
                    name: 'Review',
                    location_enable: true,
                    location_view: true,
                    upload: true,
                    comments: true,
                    file_access: true,
                    data_entry: true,
                    download: true,
                    admin: true,
                    offer_details: true
                },
                {
                    name: 'GB',
                    location_enable: true,
                    location_view: true,
                    upload: true,
                    comments: true,
                    file_access: true,
                    data_entry: true,
                    download: true,
                    admin: true,
                    offer_details: true
                }
            ],
            disable: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);  
        this.handleClick = this.handleClick.bind(this);     
    }
    componentDidMount(){
        fetch(baseUrl+'usertypes')
        .then(usertypes => usertypes.json())
        .then(usertypes => {
            this.setState({usertypes: usertypes});
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        fetch(baseUrl+'usertypes',{
            method: "PUT",
            headers: {
                'Authorization': 'Bearer '+this.props.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({usertypes: this.state.usertypes})
        }).then(types => types.json()).then(types => {
            this.setState({disable: true});
        });
    }
    handleClick(index, property){
        let temp = this.state.usertypes;
        temp[index][property]=!temp[index][property];
        this.setState({usertypes: temp, disable: false});
    }
    render(){
        return(
                <div className="container">
                    <form  className="form-group" onSubmit={this.handleSubmit} method="post">
                    <div className="container-fluid">
                    <div >
                        
                    </div>
                    <h1>
                        <span className="ml-4 fas fa-arrow-left fa-sm float-left" style={{cursor: 'pointer'}} onClick={() => this.props.goBack()}></span>
                        User Access Page
                    </h1>
                    <hr/>
                    <table className="tabledata table-responsive" >
                        <tbody>
                        <tr>
                            <th>Access</th><th>Level A</th><th>Level B</th><th>Level C</th><th>Level D</th>
                        </tr>
                        <tr>
                            <td>Permitted</td><td>User Operator</td><td>Data Entry</td><td>Review Like Rana</td><td>GB/Ashesh</td>
                        </tr>
                        <tr>
                            <td>Location Enable</td>
                            <td><Switch onClick={() => this.handleClick(0,'location_enable')} on={this.state.usertypes[0].location_enable}/></td>
                            <td><Switch onClick={() => this.handleClick(1,'location_enable')} on={this.state.usertypes[1].location_enable}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'location_enable')} on={this.state.usertypes[2].location_enable}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'location_enable')} on={this.state.usertypes[3].location_enable}/></td>
                        </tr>
                        
                            <tr>
                            <td>Location View</td>
                            <td><Switch onClick={() => this.handleClick(0,'location_view')} on={this.state.usertypes[0].location_view}/></td>
                            <td><Switch onClick={() => this.handleClick(1,'location_view')} on={this.state.usertypes[1].location_view}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'location_view')} on={this.state.usertypes[2].location_view}/></td>
                            <td><Switch onClick={() => this.handleClick(3,'location_view')} on={this.state.usertypes[3].location_view}/></td>
                            </tr>
                        
                            <tr>
                            <td>Upload</td>
                            <td><Switch onClick={() => this.handleClick(0,'upload')} on={this.state.usertypes[0].upload}/></td>
                            <td><Switch onClick={() => this.handleClick(1,'upload')} on={this.state.usertypes[1].upload}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'upload')} on={this.state.usertypes[2].upload}/></td>
                            <td><Switch onClick={() => this.handleClick(3,'upload')} on={this.state.usertypes[3].upload}/></td>
                            </tr>
                        
                            <tr>
                            <td>Comments</td>
                            <td><Switch onClick={() => this.handleClick(0,'comments')} on={this.state.usertypes[0].comments}/></td>
                            <td><Switch onClick={() => this.handleClick(1,'comments')} on={this.state.usertypes[1].comments}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'comments')} on={this.state.usertypes[2].comments}/></td>
                            <td><Switch onClick={() => this.handleClick(3,'comments')} on={this.state.usertypes[3].comments}/></td>
                            </tr>
                        
                            <tr>
                            <td>Data Entry</td>
                            <td><Switch onClick={() => this.handleClick(0,'data_entry')} on={this.state.usertypes[0].data_entry}/></td>
                            <td><Switch onClick={() => this.handleClick(1,'data_entry')} on={this.state.usertypes[1].data_entry}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'data_entry')} on={this.state.usertypes[2].data_entry}/></td>
                            <td><Switch onClick={() => this.handleClick(3,'data_entry')} on={this.state.usertypes[3].data_entry}/></td>
                            </tr>
                        
                            <tr>
                            <td>File Access</td>
                            <td><Switch onClick={() => this.handleClick(0,'file_access')} on={this.state.usertypes[0].file_access}/></td>
                            <td><Switch onClick={() => this.handleClick(1,'file_access')} on={this.state.usertypes[1].file_access}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'file_access')} on={this.state.usertypes[2].file_access}/></td>
                            <td><Switch onClick={() => this.handleClick(3,'file_access')} on={this.state.usertypes[3].file_access}/></td>
                            </tr>
                        
                            <tr>
                            <td>Download</td>
                            <td><Switch onClick={() => this.handleClick(0,'download')} on={this.state.usertypes[0].download}/></td>
                            <td><Switch onClick={() => this.handleClick(1,'download')} on={this.state.usertypes[1].download}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'download')} on={this.state.usertypes[2].download}/></td>
                            <td><Switch onClick={() => this.handleClick(3,'download')} on={this.state.usertypes[3].download}/></td>
                            </tr>
                        
                            <tr>
                            <td>Offer Details</td>
                            <td><Switch onClick={() => this.handleClick(0,'offer_details')} on={this.state.usertypes[0].offer_details}/></td>
                            <td><Switch onClick={() => this.handleClick(1,'offer_details')} on={this.state.usertypes[1].offer_details}/></td>
                            <td><Switch onClick={() => this.handleClick(2,'offer_details')} on={this.state.usertypes[2].offer_details}/></td>
                            <td><Switch onClick={() => this.handleClick(3,'offer_details')} on={this.state.usertypes[3].offer_details}/></td>
                            </tr>
                        </tbody>
                    </table>

                        </div><br/>
                        <button type="submit" className="btn btn-primary" disabled={this.state.disable}>Apply</button>
                        <br/>
                                        
                 </form>

            </div>
        );
    }
} 
export default UserA