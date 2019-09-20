import React ,{Component} from 'react';
import './comments.css';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Comment extends Component{
    render(){
        var comment = new Comment()
        return(<div className="container">
            <div className="comments-container col-12 col-sm-12"></div>
            <h1> Commenterio</h1>
            <ul id="comment-list" >
                <li classname="comment-main-level comment-box comment-head">
                <h6 className="comment-name by-author">{/* <a href="http://creaticode.com/blog">Agustin Ortiz</a>*/}Agustin Ortiz</h6> 
                                            <span>hace 20 minutos</span>
                                            <i className="fa fa-reply"></i>
                                            <i className="fa fa-heart"></i>
                                        <div className="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                        </div>
                </li>
                <ul classname="comments-list reply-list">
                    <li>
                    <div className="comment-box comment-head">
                                            <h6 className="comment-name">{/*{<a href="http://creaticode.com/blog">Lorena Rojero</a>} */}</h6>
                                                <span>User 1</span>
                                            <div className="comment-content">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                            </div><br/>

                                        </div>
                    </li>

                </ul>

            </ul>
 </div>
 
        );
    }
}

export default Comment;