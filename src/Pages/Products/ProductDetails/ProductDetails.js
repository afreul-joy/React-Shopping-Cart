import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import {Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {  useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  //showing single details
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  //-----------Button Handler--------------
  const handleButtonClick = (data) =>{
    console.log(data);
        // Send data server POST API
        fetch("http://localhost:5000/cart", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
          
            if (data.insertedId) {
              console.log("clicked") 
              
            }
          });
  }

  return (
    <div>
    <div className="place-banner">
      <Link className="link-style" to="/">
        Home
      </Link>
      <Link className="link-style" to="/product">
        All Products
      </Link>
    </div>
    <div className="place-area">
      <Container>
        <Row className="mb-5 mt-3">
          <Col xs={12} md={4} lg={4}>
              <div className="">
                  <img className="img-fluid" src={product.img} alt="" />
              </div>
          </Col>
          <Col xs={12} md={8} lg={8} className="mt-4">
          <div className="detail-area">
              <div>
                <h3
                  className="text-center mt-2 fw-bold"
                  style={{ color: "#3498db" }}
                >
                  {product.name}
                </h3>
                <p className="text-center">Price: {product.price}</p>
                <p className="text-center"> Quick Overview : {product.description}</p> 
                <Button onClick={()=>(handleButtonClick(product))} className="btn btn-primary mb-2"> Add to Cart </Button> 
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default ProductDetails;
