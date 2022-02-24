import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class NavigationHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand
            style={{ color: "white" }}
            as={Link}
            to="/luke-whittle-resume/"
          >
            Luke Whittle
          </Navbar.Brand>

          <Nav.Link style={{ color: "white" }} as={Link} to="/About">
            About
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} as={Link} to="/Contact">
            Contact
          </Nav.Link>
        </Navbar>
        <Outlet />
      </div>
    );
  }
}

export default NavigationHeader;
