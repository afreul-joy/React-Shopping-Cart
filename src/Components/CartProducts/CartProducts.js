import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import './CartProducts.css'
import Swal from "sweetalert2";

const CartProducts = (props) => {

  // const [products, setProducts] = useState([]);
  

  // useEffect(() => {
  //   fetch("http://localhost:5000/cart")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // console.log(props.product);


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
        <Button onClick={()=>(props.handleButtonClick(props.product))} className="btn btn-primary mb-2"> Add to Cart </Button> 
        {/* <button
                  onClick={() => handleDelete(props.product._id)}
                  className="btn bg-warning m-2"
                >
                  {" "}
                  <i class="fas fa-trash"></i> Delete
                </button> */}
                <Button onClick={()=>(props.handleDelete(props.product._id))} className="btn btn-warning mb-2"> Delete</Button> 
      </div>{" "}
    </div>
  );
};

export default CartProducts;
