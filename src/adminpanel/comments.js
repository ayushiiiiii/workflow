import React ,{Component} from 'react';
import './comments.css';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
class Comment extends Component{
    render(){
        var comment = new Comment()
        return(

                       <div className=" comments-container">
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
                                <ul className="comments-list">
                                    <li>
                                      {/* <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""> */}

                                      {/* </img></div> */}

                                        <div className="comment-box comment-head">
                                            <h6 className="comment-name">{/*{<a href="http://creaticode.com/blog">Lorena Rojero</a>} */}</h6>
                                                <span>User 1</span>
                                            <div className="comment-content">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                            </div><br/>

                                        </div>
                                    </li><br/>
                                    <li>
                                    <div className="comment-box">
                                            <div className="comment-head">
                                            <h6 className="comment-name">{/*{<a href="http://creaticode.com/blog">Lorena Rojero</a>} */}</h6>
                                                <span>User 1</span>
                                            </div>
                                            <div className="comment-content">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                            </div>
                                        </div>
                                    </li>
                                    
                        </ul>
                        </li>
</li>                   <br/>

                                    {/* <li>
                                       <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></img></div>
                                        <div className="comment-box">
                                            <div className="comment-head">
                                                <h6 className="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
                                                <span>hace 10 minutos</span>
                                                <i className="fa fa-reply"></i>
                                                <i className="fa fa-heart"></i>
                                            </div>
                                            <div className="comment-content">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <div class="comment-main-level">
                                    <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""></img></div>
                                     <div class="comment-box">
                                        <div class="comment-head">
                                            <h6 class="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
                                            <span>hace 10 minutos</span>
                                            <i class="fa fa-reply"></i>
                                            <i class="fa fa-heart"></i>
                                        </div>
                                        <div class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                        </div>
                                    </div>
                                </div>
                            </li> */}
                </ul></div>
                
       );
    }
}


var RenderComment = function RenderComment() {
    ReactDOM.render(React.createElement(
                      "div", null, " ", Comment, " "
                    ), document.getElementById("root"));
    }
export default Comment 