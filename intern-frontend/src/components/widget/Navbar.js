import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarUser = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Home</Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link>
                <Link to="/login">Login</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/registration">Registration</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavbarUser;
