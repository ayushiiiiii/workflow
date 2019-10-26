import React, {Component} from 'react';
import './insidedashboard.css';
import { BrowserRouter,withRouter } from 'react-router-dom';
import Main from './maincomponent';



class App extends Component {
render(){
    return ( 
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
    );
}
}
export default App;
