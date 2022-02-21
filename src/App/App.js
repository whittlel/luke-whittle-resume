import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="light" expand="large">
          <Navbar.Brand>Luke Whittle</Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/About">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/Contact">
            Contact
          </Nav.Link>
        </Navbar>
        <Outlet />
      </div>
    );
  }
}

export default App;
