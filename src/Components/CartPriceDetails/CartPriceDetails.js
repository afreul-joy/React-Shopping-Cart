import React from "react";
import { Button } from "react-bootstrap";

const CartPriceDetails = (props) => {
  // console.log(props.cart)
  const cart = props.cart;
  const subTotal = cart.reduce((sum, product) => sum + product.price, 0);
  const tax = subTotal / 25;
  const taxFixed = tax.toFixed(2);
  const total = subTotal + taxFixed;
  return (
    <div>
      <h4>You have ({cart.length}) items in your cart </h4>
      <p> Sub Total : {subTotal}</p>
      <p> Tax : {taxFixed}</p>
      <p> Total : {total}</p>
      <Button className="btn btn-info p-1 mb-2">Continue Shopping</Button>
      <br />
      <Button className="btn btn-success p-1">Checkout</Button>
    </div>
  );
};

export default CartPriceDetails;
