import React from 'react';
import Progress from   '../project/progress';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function List(props){;
    return(
        <div className="card">
            <div className="card-header" id={"heading"+props.index}>
            <h2 className="mb-0">
                <button className="btn btn-link" type="button" data-toggle="collapse" data-target={"#collapse"+props.index} aria-expanded="true" aria-controls={"collapse"+props.index}>
                    {props.title}
                </button>
            </h2>
            </div>

            <div id={"collapse"+props.index} className="collapse" aria-labelledby={"heading"+props.index} data-parent="#projectsAccordion">
            <div className="card-body">
            <div className="card-text container-fluid">
                <center> <table className=" table-responsive table table-striped text-center table-condensed">
                    <tbody>
                    <tr>
                        <td><b>MACHINE</b></td><td><span>{props.project.machine} </span></td></tr>
                        <tr><td><b>MDSNO</b></td><td><span>{props.project.mdsno}</span></td>
                    </tr><tr>
                        <td><b>LOCATION</b></td><td><span>{props.project.location}</span></td></tr>
                        <tr><td><b>SHORT NAME</b></td><td><span>{props.project.short_name} </span></td>
                    </tr>
                    <tr><td><b>START DATE</b></td><td><span>{props.project.start_date} </span></td>
                    </tr>
                    <tr><td><b>FAT DATE</b></td><td><span>{props.project.fat_date } </span></td>
                    </tr>
                    </tbody>
                </table></center>
                <div className="col-sm-2 text-center">
                    <CircularProgressbar value={props.completion} text={`${props.completion}%` } />
                    </div>
                    <Link to={"/home/"+props.project._id}><button type="Submit">More details</button></Link> 
                </div>
            </div>
            </div>
        </div>
    );
}

 export default List;   