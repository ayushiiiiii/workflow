import React, {Component} from 'react';


class Complete extends Component {
    render(){
        return(
            <div  className="container">
                <form onSubmit={this.handleSubmit} method="post" className="log form-group">
                <h1>Project Completion</h1>
                    <hr/>
                <label value="project1" htmlfor="project1"><b>Project 1</b></label>
                <select ref="project1" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project2" htmlfor="project2"><b>Project 2</b></label>
                <select ref="project2" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project3" htmlfor="project3"><b>Project 3</b></label>
                <select ref="project3" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project4" htmlfor="project4"><b>Project 4</b></label>
                <select ref="project4" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project5" htmlfor="project5"><b>Project 5</b></label>
                <select ref="project5" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project6" htmlfor="project6"><b>Project 6</b></label>
                <select ref="project6" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project7" htmlfor="project7"><b>Project 7</b></label>
                <select ref="project7" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project8" htmlfor="project8"><b>Project 8</b></label>
                <select ref="project8" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project9" htmlfor="project9"><b>Project 9</b></label>
                <select ref="project9" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <label value="project10" htmlfor="project10"><b>Project 10</b></label>
                <select ref="project10" className="dropdown">
                            <option value="10 " selected>10 </option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40" >40</option>
                            <option value="50" >50</option>
                            <option value="60" >60</option>
                            <option value="70" >70</option>
                            <option value="80" >80</option> 
                            <option value="90" >90</option> 
                            <option value="100" >100</option>
                    </select><br/>
                    <button type="submit"> Add Project</button>

                </form>


            </div>
        );
    }
}
export default Complete;