import React, { useEffect, useState } from "react";
import CartProducts from "../CartProducts/CartProducts";
import CartPriceDetails from "../CartPriceDetails/CartPriceDetails";
import "./CartDetails.css";
import Swal from "sweetalert2";

const CartDetails = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id,e) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        {
          const url = `http://localhost:5000/cart/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remainingOrder = products.filter((product) => product._id !== id);
                setProducts(remainingOrder);
              }
            });
        }
      }
    });
  };
  const handleButtonClick = (products) => {
    const newCart = [...cart, products];
    setCart(newCart);
  };
  return (
    <div className="cartDetails-Container">
      <div className="CartProduct">
        {products.map((product) => (
          <CartProducts
            product={product}
            handleButtonClick={handleButtonClick}
            handleDelete={handleDelete}
          ></CartProducts>
        ))}
      </div>

      <div className="CartPriceDetails">
        <CartPriceDetails cart={cart}> </CartPriceDetails>
      </div>
    </div>
  );
};

export default CartDetails;
