import {Card} from 'react-bootstrap'
import React from 'react'

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
        id : "60f0440050783f00150a401b",
    }
    
    componentDidMount = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgyYmM1YTEwOWJiYzAwMTVlNDA1ZGQiLCJpYXQiOjE2Mjk0NTIyNzgsImV4cCI6MTYzMDY2MTg3OH0.Udj1GYOhQEcl86grsjygbRG8JgzuBVAp2oSj8s6SJTY");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    console.log("test" + this.state.id)
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.id, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
 }

    render() {
        return(
            this.props.book ? (
                <Card.Footer className="text-muted">
                    Book Comments
                </Card.Footer>
            ) : (
                <Card.Footer className="text-muted"> </Card.Footer>
            )
            )
        
      
    }
}

export default CommentArea