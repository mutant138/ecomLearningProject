import React from 'react';
import { Container, Row, Col, Carousel, ListGroup, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

// Sample data, replace this with your actual data import
const productData = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'
    ],
    reviews: [
      { name: 'John', comment: 'Great product!' },
      { name: 'Jane', comment: 'Loved it!' }
    ]
  },
  {
    id: 2,
    title: 'Black and White Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'
    ],
    reviews: [
      { name: 'Alice', comment: 'Worth the price!' },
      { name: 'Bob', comment: 'Good quality.' }
    ]
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'
    ],
    reviews: [
      { name: 'Charlie', comment: 'Fantastic product!' },
      { name: 'Dave', comment: 'Highly recommend.' }
    ]
  }
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = productData.find(p => p.id === parseInt(id));
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <Container className="product-details">
        <Row>
          <Col md={6}>
            <Carousel fade>
              {product.images.map((img, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={img} alt={`slide-${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={6}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button">Add to Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h4>Reviews</h4>
            <ListGroup variant="flush">
              {product.reviews.map((review, index) => (
                <ListGroup.Item key={index}>
                  <strong>{review.name}</strong>
                  <p>{review.comment}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default ProductDetails;
