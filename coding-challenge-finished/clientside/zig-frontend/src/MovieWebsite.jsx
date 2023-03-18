import React from "react";
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, ListGroup, Card } from 'react-bootstrap';


function MovieWebsite() {
    return (
      <Container fluid>
        <Row>
          <Col sm={2} className="sidebar">
            <ListGroup>
              <ListGroup.Item>Movie Categories</ListGroup.Item>
              <ListGroup.Item>People You Follow</ListGroup.Item>
              <ListGroup.Item>Logout</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10} className="content">
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>Movie Website</Navbar.Brand>
              <Nav className="mr-auto"></Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
              <Nav>
                <Nav.Link href="#profile">Profile</Nav.Link>
              </Nav>
            </Navbar>
            <Card className="movie-details">
              {/* Movie details here */}
            </Card>
            <div className="category-section">
              {/* Category sections here */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default MovieWebsite;
  