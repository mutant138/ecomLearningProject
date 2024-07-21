import React from 'react';
import { Offcanvas, Button, Col, Row, Container, Card } from 'react-bootstrap';
import { useCart } from '../../store/CartContext';

const SideDrawer = ({ show, handleClose }) => {
  const { cart } = useCart();

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart Items</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <Row xs={1} md={2} lg={1} className="g-4">
              {cart.map((product, index) => (
                <Col key={index}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                      <Card.Title>{product.title}</Card.Title>
                      <Card.Text>
                        Price: ${product.price} | Quantity: {product.quantity}
                      </Card.Text>
                      <Button variant="danger">Remove</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideDrawer;
