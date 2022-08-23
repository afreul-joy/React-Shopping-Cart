import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Product = (props) => {
    // console.log(props.product); 
    const { name, description, img, _id,price } = props.product;

    return (
        <>
         <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {description}
        </Card.Text>
        <Card.Text>
         {price}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </Col>
        </>
    );
};

export default Product;