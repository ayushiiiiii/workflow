import React, { Component } from 'react';
import './dashboard.css';
import Progress from   '../project/progress';
import { Link } from 'react-router-dom';

class Cards extends Component{
    render(){
        return(
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card project">
                <div className="card-header">
                    <h4 className="card-title">{this.props.title}</h4>
                </div>
                <div className="card-body">
                    <div className="card-text">
                         <Progress/>
                    </div>
                    <Link to="/dashboard" className="btn btn-primary">Show Project Details</Link>
                 </div>
            </div>
            </div>
        );
    }
}


 export default Cards;