import React, { Component } from 'react';
import './progress.css';

class Progress extends Component{
    render(){
        return(
        
<div className="container">
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className="progress blue">
                <span className="progress-left">
                    <span className="progress-bar"></span>
                </span>
                <span className="progress-right">
                    <span className="progress-bar"></span>
                </span>
                <div className="progress-value">{this.props.percentage}</div>
            </div>
        </div>
    </div>
</div>
        );
}
}
export default Progress;