import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavigationHeader.css"

class NavigationHeader extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand
            style={{ color: "white", paddingLeft: "30px" }}
            as={NavLink}
            to="/luke-whittle-resume/"
          >
            Luke Whittle
          </Navbar.Brand>


          <NavDropdown title="About">
            <NavDropdown.Item as={NavLink} to="/AboutDCPV">DCPV360</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/AboutATI">ATI</NavDropdown.Item>
          </NavDropdown>
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
