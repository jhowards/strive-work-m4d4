import React, { Component } from 'react';
import CommentListItem from './CommentListItem';

class CommentsList extends Component {
    render() {
        return (
       <ul>
           {this.props.comments.map(comment => <CommentListItem comment={comment}/>)}
        </ul>
        );
    }
}

export default CommentsList;