import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { useCart } from "../../store/CartContext";

const CartItems = () => {
  const { cart } = useCart();

  return (
    <Container className="my-4">
      <h1>Cart Items</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
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
          ))
        )}
      </Row>
    </Container>
  );
};

export default CartItems;
