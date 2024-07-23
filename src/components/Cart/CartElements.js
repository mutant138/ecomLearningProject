import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { useCart } from '../../store/CartContext';
import './CartElements.css'; // Make sure to create and import this CSS file
import { Link } from 'react-router-dom';

const CartElements = () => {
  const { addToCart } = useCart();

  const cartElements = [
    { id: 1,
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      id:2,
      title: 'Black and White Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      id:3,
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ];

  return (
    <Container className="my-4">
      <h1 className="text-center mb-4">Products List</h1>
      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
        {cartElements.map((product, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center">
            <Card className="h-100 cart-card">
              <Link to={`/product/${product.id}`} >
              <Card.Img variant="top" src={product.imageUrl} className="card-img-top" />
              </Link>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  Price: ${product.price} | Quantity: {product.quantity}
                </Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CartElements;
