import {Card} from 'react-bootstrap'
import CommentArea from './CommentArea'
import React from 'react';

// const SingleBook = (props) =>(
//                  <Card className="book" style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={props.cover} />
//                 <Card.Body>
//                 <Card.Title>{props.title}</Card.Title>
//                 </Card.Body>
//                 <Card.Footer className="text-muted"><CommentArea /></Card.Footer>
                
//                 </Card>   
// )

class SingleBook extends React.Component{
    state = {
        selectedBook: null,
    }
    render() {
        return (
            <Card onClick={() => this.setState({
                selectedBook: this.props.bookobj
            })}
             className="book" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.cover} />
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            </Card.Body>
            <CommentArea id={this.props.asin} book={this.state.selectedBook}/>
            </Card>   
        );
    }
}

export default SingleBook