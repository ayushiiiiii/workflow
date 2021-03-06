import React, {Component} from 'react';
import './popup.css';
import Add from '../add.png';

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
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


          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }
  class Addtask extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div className='app'>
          <button onClick={this.togglePopup.bind(this)}> Issues</button>

          {this.state.showPopup ? 
            <Popup
              text="Issues"
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }

        </div>
      );
    }
  };
  
  
  
  
  export default Addtask;