import React, { useState } from "react";
import CartProducts from "../CartProducts/CartProducts";
import fakeData from "../../fakeData";

const CartDetails = () => {
  const [products, setProducts] = useState(fakeData);
  

  return (
    <div className="cartDetails-Container">
      {products.map((product) => (
        <CartProducts product={product}></CartProducts>
      ))}
    </div>
  );
};

export default CartDetails;
