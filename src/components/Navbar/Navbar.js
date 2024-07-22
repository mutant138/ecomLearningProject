import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartIcon from '../Cart/CartIcon';
import SideDrawer from "../Cart/SideDrawer";
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handleClose = () => setShowCart(false);

  return (
    <>
      <Navbar expand="lg" bg="dark" className="bg-body-tertiary-warning" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">React Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} exact to="/" className="text-light" activeClassName="active">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="/store" className="text-light" activeClassName="active">
                STORE
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="text-light" activeClassName="active">
                ABOUT
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className="text-light" activeClassName="active">
                CONTACT US
              </Nav.Link>
              <Nav.Link onClick={toggleCart} className="text-light d-flex align-items-center">
                Cart
                <CartIcon className="ms-2" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SideDrawer show={showCart} handleClose={handleClose} />
    </>
  );
};

export default HeaderNav;
