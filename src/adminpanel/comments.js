import React, {Component} from 'react';
import './comments.css';
import { baseUrl } from '../baseurl';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state={
            comments: null
        }
        this.renderComments =this.renderComments.bind(this);
        this.postComment = this.postComment.bind(this);
    }
    renderComments(){
        fetch(baseUrl+'projects/'+this.props.projectId+'/tasks/'+this.props.taskId+'/comments',{
            headers: {
                'Authorization': 'Bearer '+this.props.token
            }
        }).then(comments => comments.json())
        .then(comments => {
            this.setState({comments: comments});
        });
    }
    componentDidMount(){
        this.renderComments();
    }
    postComment(e){
        e.preventDefault();
        this.setState({comments: [...this.state.comments, {comment: this.refs.comment.value, author: this.props.user}]});
        fetch(baseUrl+'projects/'+this.props.projectId+'/tasks/'+this.props.taskId+'/comments', {
            method: "POST",
            headers: {
                'Authorization': 'Bearer '+this.props.token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment: this.refs.comment.value})
        }).then(comments => comments.json())
        .then(comments => {
            this.setState({comments: comments});
            this.refs.comment.value='';
        });
    }
    render(){
    const CommentsView = () => {
        if(this.state.comments==null){
            return(<div className="icon"><i className="fas fa-spinner fa-3x fa-pulse text-primary ic"></i></div>);
        }
        var CommentView = [],i=0;
        this.state.comments.reverse().forEach(comment => {
            CommentView.push(
                <li key={i++}>
                    <div className="comment-main-level ">
                        <div className="comment-box comment-head">
                            <h6 className="comment-name by-author">{comment.author.usertype}</h6> 
                                <span>{comment.author.firstname+' '+comment.author.lastname}</span>
                                <i className="fa fa-reply"></i>
                                <i className="fa fa-heart"></i>
                            <div className="comment-content">
                                {comment.comment}
                            </div>
                        </div>
                    </div><br/>
                </li>
            );
        });
        return(CommentView);
    }
    return(

        <div className=" containercomments-container">
        <h1>Comentarios  {/*  <a href="http://creaticode.com">creaticode.com</a> */}</h1>

            <ul id="comments-list" className="comments-list">
            <li className="commentForm"><div className="comment-box comment-head">
                <h6 className="comment-name by-author">{this.props.user.usertype}</h6> 
                        <span>{this.props.user.firstname+' '+this.props.user.lastname}</span>
                        <i className="fa fa-reply"></i>
                        <i className="fa fa-heart"></i>
                        <div>
                    <form className="form-group fo mb-4">
                        <textarea ref="comment" className="comment-content comment-box " required placeholder="Enter your comment here"></textarea>   
                        <button type="button" className="btn btn-primary" onClick={this.postComment}>Add Comment</button>                                       
                    </form></div></div>
                    
                </li>
                <CommentsView/>
            </ul>
            <br/></div>

                                
                                
            
    );
    }
}
export default Comment;