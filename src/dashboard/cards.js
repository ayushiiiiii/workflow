import React, { Component } from 'react';
import './dashboard.css';
import Progress from   '../project/progress';
import { Link } from 'react-router-dom';

class Cards extends Component{
    render(){
        return(
        <div className="col-12 col-sm-6 col-md-3">
            <div className="card project">
                <div className="card-header">
                    <h4 className="card-title">{this.props.title}</h4>
                </div>
                <div className="card-body">
                    <div className="card-text">
                        <table>
                            <tr>
                                <td>Machine</td><td><input type="text"  value={this.props.project.machine} /></td></tr>
                               <tr><td>Mdsno</td><td><input type="text" value={this.props.project.mdsno} /></td>
                            </tr><tr>
                                <td>delivery</td><td><input type="text" size="4" value={this.props.project.delivery} /></td></tr>
                                <tr><td>short_name</td><td><input type="text" size="4" value={this.props.project.short_name} /></td>
                            </tr>
                        </table>
                         <Progress percentage="70"/>
                    <Link to="/dashboard"><button type="Submit">More details</button></Link> 
                    </div>
                </div>
            </div>
        </div>

           
        );
    }
}


 export default Cards;