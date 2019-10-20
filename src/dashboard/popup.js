import React, {Component} from 'react';
import './popup.css';
import Add from '../add.png';

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }
  class App extends React.Component {
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
          <button onClick={this.togglePopup.bind(this)}> Edit Password</button>

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
  
  
  
  
  export default App;