import {Row, Col, Form} from 'react-bootstrap'
import data from './data/scifi.json'
import SingleBook from './SingleBook'
import React from 'react';



  class BookList extends React.Component{
      state = {
          query: "",
      }
      render() {
        return (
            <div>
                <div className="d-flex mb-3">
                <Form className="mx-auto mt-5" style={{ width: '25rem' }}>
                <Form.Group controlId="formSearch">
                    <Form.Label>Search for Book</Form.Label>
                    <Form.Control type="text" placeholder="Book Title" />
                </Form.Group>
    
                </Form>
                </div>
    
            <Row xs={1} md={3} lg={3} xl={5} className="mx-2">
            {
                data.map(book => (
                    <Col key={book.asin} className="mb-3">
                    <SingleBook bookobj={book} cover={book.img} title={book.title} />
                </Col>
                ))
            }
            </Row>
            </div>
        );
      }
  }

export default BookList