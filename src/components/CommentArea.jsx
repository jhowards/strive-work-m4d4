import {Card} from 'react-bootstrap'
import React from 'react'
import CommentsList from './CommentsList'

// const CommentArea = (props) =>(
//     props.book ? (
//         <Card.Footer className="text-muted">
//             Book Comments
//         </Card.Footer>
//     ) : (
//         <Card.Footer className="text-muted"> </Card.Footer>
//     )
          
// )

// export default CommentArea



class CommentArea extends React.Component{
state = {
    comments : []
}

    render() {
        return(
            this.props.book && (
                <Card.Footer className="text-muted">
                    <CommentsList />
                </Card.Footer>
            )
            
        )
      
    }
}

export default CommentArea