import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
const NavBar = () => {
  return (
    <div style={{ margin: "3em" }}>
      <Navbar className="text-warning" bg="secondary" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Movie Talk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Movie Reviews</Nav.Link>
            <Nav.Link href="#link">Spoiler</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search Movie"
              className="mr-sm-2"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
