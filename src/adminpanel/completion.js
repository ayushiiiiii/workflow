import React, {Component} from 'react';


class Complete extends Component {
    constructor(props){
        super(props);
        this.state={
            slideValue: 30
        }
    }
    handleChange(){
        this.setState({slideValue: this.refs.rangeSlider.value});
    }
    render(){
        return(
            <div  className="container ui-content range-field my-5">
                <form onSubmit={this.handleSubmit} method="post" className="log form-group">
                <h1>Project Completion</h1>
                    <hr/>
                <label value="project1" htmlfor="project1"><b>Project 1</b></label>
                <input ref="rangeSlider" type="range" name="points" className="custom-range" min="0" value="0" max="100" onChange={this.handleChange.bind(this)} value={this.state.slideValue}></input>
                        <span>{this.state.slideValue}</span>
                           <br/>
                    <label value="project2" htmlfor="project2"><b>Project 2</b></label>
                    <input type="range" name="points" className="custom-range" min="0"  max="100"></input>
                        
                        <br/>
                    <label value="project3" htmlfor="project3"><b>Project 3</b></label>
                    <input type="range" name="points" className="custom-range" min="0"  max="100"></input>
                        
                        <br/>
                    <label value="project4" htmlfor="project4"><b>Project 4</b></label>
                    <input type="range" name="points" className="custom-range" min="0" max="100"></input>
                        
                        <br/>
                    <label value="project5" htmlfor="project5"><b>Project 5</b></label>
                    <input type="range" name="points" className="custom-range" min="0"  max="100"></input>
                        
                        <br/>
                    <label value="project6" htmlfor="project6"><b>Project 6</b></label>
                    <input type="range" name="points" className="custom-range" min="0"  max="100"></input>
                        
                        <br/>
                    <label value="project7" htmlfor="project7"><b>Project 7</b></label>
                    <input type="range" name="points" className="custom-range" min="0" max="100"></input>
                        
                        <br/>
                    <label value="project8" htmlfor="project8"><b>Project 8</b></label>
                    <input type="range" name="points" className="custom-range" min="0"  max="100"></input>
                        
                        <br/>
                    <label value="project9" htmlfor="project9"><b>Project 9</b></label>
                    <input type="range" name="points" className="custom-range" min="0" max="100"></input>
                        
                        <br/>
                    <label value="project10" htmlfor="project10"><b>Project 10</b></label>
                    <input type="range" name="points" className="custom-range" min="0"  max="100"></input>
                        
                        <br/>
                    <button type="submit"> Add Project</button>

                </form>


            </div>
        );
    }
}
export default Complete;