import React from "react";
import './CartProducts.css'

const CartProducts = (props) => {
  console.log(props.product);
  const { name, description, img, _id,price } = props.product;
  return (
    <div className="cartProduct-container">
      <div className="">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div>
        <h5> ID : {_id}</h5>
        <h3> {name}</h3>
        <p> {description}</p>
        <p> {price}</p>
      </div>{" "}
    </div>
  );
};

export default CartProducts;
