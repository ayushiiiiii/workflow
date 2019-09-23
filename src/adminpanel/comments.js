import React ,{Component} from 'react';
import './comments.css';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
class Comment extends Component{
    render(){
        var comment = new Comment()
        return(

                       <div className=" containercomments-container">
                      <h1>Comentarios  {/*  <a href="http://creaticode.com">creaticode.com</a> */}</h1>

                        <ul id="comments-list" className="comments-list">
                            <li>
                                <div className="comment-main-level ">
                                    {/* <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="photo"></img></div> */}
                                    <div className="comment-box comment-head">
                                        <h6 className="comment-name by-author">{/* <a href="http://creaticode.com/blog">Agustin Ortiz</a>*/}</h6> 
                                            <span>hace 20 minutos</span>
                                            <i className="fa fa-reply"></i>
                                            <i className="fa fa-heart"></i>
                                        <div className="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                        </div>
                                    </div>
                                </div><br/>
                                <li>
                                <div className="comment-main-level ">
                                    {/* <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="photo"></img></div> */}
                                    <div className="comment-box comment-head">
                                        <h6 className="comment-name by-author">{/* <a href="http://creaticode.com/blog">Agustin Ortiz</a>*/}</h6> 
                                            <span>hace 20 minutos</span>
                                            <i className="fa fa-reply"></i>
                                            <i className="fa fa-heart"></i>
                                        <div className="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                        </div>
                                    </div>
                                    </div>
                                    <li><div className="comment-box comment-head">
                                    <h6 className="comment-name by-author">{/* <a href="http://creaticode.com/blog">Agustin Ortiz</a>*/}</h6> 
                                            <span>User_name</span>
                                            <i className="fa fa-reply"></i>
                                            <i className="fa fa-heart"></i>
                                            <div>
                                        <form className="form-group fo">
                                            <textarea className="comment-content comment-box " >  Enter your comment here</textarea>   
                                            <button type="button" className="btn btn-primary " >Add comment</button>                                       
                                        </form></div></div>
                                        
                                    </li>
                               </li>
                                  
                        
                        </li></ul>
                <br/></div>

                                    
                                   
                
       );
    }
}


var RenderComment = function RenderComment() {
    ReactDOM.render(React.createElement(
                      "div", null, " ", Comment, " "
                    ), document.getElementById("root"));
    }
export default Comment 