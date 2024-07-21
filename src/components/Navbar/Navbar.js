import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartIcon from '../Cart/CartIcon';
import SideDrawer from "../Cart/SideDrawer";

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
          <Navbar.Brand href="#home">React Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-light">
                HOME
              </Nav.Link>
              <Nav.Link href="/store" className="text-light">
                STORE
              </Nav.Link>
              <Nav.Link href="/about" className="text-light">
                ABOUT
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
