import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <Navbar className="navigation" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            {/* <img width="100px" height="80px" src={brand} alt="logo" />  */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <div className="navmenu">
                <NavLink
                  to="/"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/products"
                  className={(selected) =>
                    selected.isActive ? "selected" : ""
                  }
                >
                  Explore
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
