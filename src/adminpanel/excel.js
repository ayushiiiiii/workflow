import React, {Component } from 'react';
import './excel.css';


class TaskForm extends Component{
    render()
    {
        return(
            <div className="container" > <nav className="navbar navbar-expand-sm bg-light justify-content-center">

            <center> <h1>Title{this.props.title}</h1> </center>
            </nav>
    
                <form className="ex">
                <table className="tabledata">
                             <br/>
                            <tr><td>Major Tasks </td><td><input type="text"></input></td><td>    </td>
                          <td>Weightage </td><td><input type="text"></input></td></tr><br/>
                           <tr> <td>Start date(planned)</td><td><input type="text"></input></td><td>  </td>
                            <td>End date(planned)</td><td><input type="text"></input></td></tr><br/>
                            <tr><td>Schduled duration(days) </td><td><input type="text"></input></td><td> </td>
                           <td>actual start Date</td><td><input type="text"></input></td></tr><br/>
                           <tr><td>Y% completion</td><td><input type="text"></input></td><td> </td>
                            <td>Review Date</td><td><input type="text"></input></td></tr><br/>
                            <tr><td>Actual end date</td><td><input type="text"></input></td><td> </td>
                            <td>Actual weightage= G*B</td><td><input type="text"></input></td></tr><br/>
                            
                    </table>
                    <br/>
                    <button type="submit">Add</button>
                </form>
            </div>


        );
       
    }
}
export default TaskForm;
