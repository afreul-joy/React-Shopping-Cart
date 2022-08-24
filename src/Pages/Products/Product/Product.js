import React from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props.product);
  const { name, description, img, _id, price } = props.product;

  return (
    <>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Link to={`/products/${_id}`}>
            {" "}
            <Card.Img variant="top" src={img} />{" "}
          </Link>
          <Card.Body>
            <Link to={`/products/${_id}`}>
              {" "}
              <Card.Title>{name}</Card.Title>{" "}
            </Link>

            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Product;
