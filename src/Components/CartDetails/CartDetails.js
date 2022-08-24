import React, { useEffect, useState } from "react";
import CartProducts from "../CartProducts/CartProducts";
import PriceDetails from "../PriceDetails/PriceDetails";
import "./CartDetails.css";

const CartDetails = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleButtonClick = (products) => { 
      const newCart = [...cart, products]
      setCart(newCart);
  }
  return (
    <div className="cartDetails-Container">
      <div className="CartProduct">
        {products.map((product) => (
          <CartProducts product={product} handleButtonClick={handleButtonClick} ></CartProducts>
        ))}
      </div>

      <div className="PriceDetails">
        <PriceDetails cart={cart}> </PriceDetails>
      </div>
    </div>
  );
};

export default CartDetails;



