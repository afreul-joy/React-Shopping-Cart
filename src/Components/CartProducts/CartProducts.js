import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import './CartProducts.css'
import Swal from "sweetalert2";

const CartProducts = (props) => {

  const { name, description, img,price } = props.product;
  return (
    <div className="cartProduct-container">
      <div className="">
        <img className="img-fluid" src={img} alt="" />
      </div>
      <div>
        <h3> {name}</h3>
        <p> {description}</p>
        <p> {price}</p>
        <Button onClick={()=>(props.handleButtonClick(props.product))} className="btn btn-primary mb-2"> Add to Cart </Button> 
        <Button onClick={()=>(props.handleDelete(props.product._id))} className="btn btn-warning mb-2"> Delete</Button> 
      </div>{" "}
    </div>
  );
};

export default CartProducts;
