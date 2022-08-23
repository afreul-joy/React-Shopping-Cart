import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container">
      <Row xs={2} md={4} className="g-4">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default Products;
