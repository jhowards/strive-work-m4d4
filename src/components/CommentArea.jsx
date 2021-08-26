import {Card} from 'react-bootstrap'

const CommentArea = (props) =>(
    props.book ? (
        <Card.Footer className="text-muted">
            Book Comments

        </Card.Footer>
    ) : (
        <Card.Footer className="text-muted"> </Card.Footer>
    )
          
)

export default CommentArea



// class CommentArea extends React.Component{
//     state = {
//         query: "",
//     }
//     render() {
//       return (
//         <h4>Great book!</h4>
//       );
//     }
// }

// export default CommentArea