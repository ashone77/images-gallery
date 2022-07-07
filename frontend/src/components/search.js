import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-2">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Control 
              type="text"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Search for images..." />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
