import React, { useEffect, useState } from "react";
import CartProducts from "../CartProducts/CartProducts";

const CartDetails = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
}, [])

  return (
    <div className="cartDetails-Container">
      {products.map((product) => (
        <CartProducts product={product}></CartProducts>
      ))}
    </div>
  );
};

export default CartDetails;
