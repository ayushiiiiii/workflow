import React ,{Component} from 'react';

class UserA extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);       
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const uname=this.refs.uname.value;
        const password=this.refs.password.value;
        this.props.auth({uname, password});
    }
    
    render(){
        return(
                <div className="container">
                    <form  className="form-group" onSubmit={this.handleSubmit} method="post">
                    <div class="container-fluid">
                    <h1>User Access Page</h1>
                    <hr/>
                    <table className="tabledata table-responsive" >
                        <tr>
                            <th>Access</th><th>Level A</th><th>Level B</th><th>Level C</th><th>Level D</th>
                        </tr>
                        <tr>
                            <td>Permitted</td><td>User Operator</td><td>Data Entry</td><td>Review Like Rana</td><td>GB/Ashesh</td>
                        </tr>
                        <tr>
                            <td>Location Enable</td>
                             <td> <select ref="location A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="location B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="location C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="location D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Location view</td>
                             <td> <select ref="View A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="View B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="View C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="View D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Location Enable</td>
                             <td> <select ref="location A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="location B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="location C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="location D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Upload</td>
                             <td> <select ref="upload A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="upload B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="upload C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="upload D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Comments</td>
                             <td> <select ref="comment A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="comment B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="comment C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="comment D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Data Entry</td>
                             <td> <select ref="data A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="data B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="data C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="data D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Chat</td>
                             <td> <select ref="chat A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="chat B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="chat C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="chat D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Download</td>
                             <td> <select ref="download A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="download B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="download C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="download D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Offer Details</td>
                             <td> <select ref="offer A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="offer  B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="offer C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="offer D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>
                        
                            <tr>
                            <td>Print</td>
                             <td> <select ref="print A" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="print B" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="print C" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            <td> <select ref="print D" className="dropdown">
                            <option value="yes " selected>Yes </option>
                            <option value="no">No </option>  </select></td>
                            </tr>

                    </table>

                        </div><br/>
                        <button type="submit">Submit</button>
                        <br/>
                                        
                 </form>

            </div>
        );
    }
} 
export default UserA