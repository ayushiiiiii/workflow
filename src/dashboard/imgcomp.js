import React, {Component} from 'react';
import Folderimg from '../folder.png';
import './imgcomp.css';


class Image extends Component{
    render(){
        return(
            <div className="col-12 col-sm-4 col-md-3">
                <div className="imgcontainer">
                     <img src={Folderimg} alt="folder_icon"></img>
                 </div>
                 </div>
                 
        );
    }
}
export default Image;