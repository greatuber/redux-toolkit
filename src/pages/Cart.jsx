/* eslint-disable jsx-a11y/no-distracting-elements */
/* eslint-disable jsx-a11y/alt-text */

// //

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProducts } from "../redux-toolkit/cartSlice";
import { FaCartPlus } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { isCart, updateProduct } from "../redux-toolkit/selectCartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  const totalItems = cartProducts.reduce((total, item) => total + item.quentity, 0);
  const totalAmount = cartProducts.reduce((total, item) => total + (item.quentity * item.price), 0).toFixed(2);
  // console.log(cartProducts);
  // const selectQuentity = useSelector((state) => state.selectCart.quentity)
  const navigate = useNavigate();
  // const cartProducts = useSelector((state) => state.cart)

  // console.log("cart", cartProducts);

  const dispatch = useDispatch();

  const removeFromCart = (index) => {
    // debugger
    dispatch(removeProducts(index));
    // console.log(index);
  };

  const updateCart = (item) => {
    dispatch(updateProduct(item));
    dispatch(isCart(false));
    // console.log("item",item);
    navigate("/selectCart");
  };

  if (cartProducts.length === 0) {
    return (
      <>
        <Navbar />
        <h1 style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"70vh", color:"yellow"}}> Opps! Cart is Empty, You have not selected any Item</h1>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h1>
            <div
              style={{ display: "flex", width: "100%", justifyContent: "end" }}
            >
              {" "}
              <div>
                <FaCartPlus />
              </div>{" "}
              {/* <span
                style={{
                  position: "relative",
                  top: " -14px",
                  right: "15px",
                  fontSize: "19px",
                }}
              >
                {cartProducts.length}{" "}
              </span> */}
              Cart
            </div>
          </h1>
        </div>

        <div>
          <div
            className="cartCard"
            style={{
              color: "#912828",
              fontWeight: "800",
              fontSize: "x-larger",
            }}
          >
            <span>Item</span>
            <span>Price/Qty</span>
            <span>Title</span>
            <span>Total Price</span>
            <span style={{ display: "flex", gap: "3rem" }}>
              <span>Update</span>
              <span>Delete</span>
            </span>
          </div>
        </div>

        <div
          className="cartWrapper example"
          
        >
          {cartProducts.map((item, index) => (
            <div key={item.id} className="cartCard">
              {/* <h1>{index}</h1> */}
              <div className="frame">
                <div className="qty">{item.quentity}</div>
                <img src={item.image} style={{width:"100px", borderRadius:"10%"}} />
              </div>

              <h2>
                <span> ${item.price}</span>
              </h2>

              {/* <marquee> */}
                <h3>{item.title}</h3>
              {/* </marquee> */}

              <div>
                <h2>${item.price * item.quentity}</h2>
              </div>

              <div style={{ display: "flex", gap: "2rem" }}>
                <button
                  className="btn"
                  onClick={() => updateCart(item)}
                  style={{ fontSize: "1.5rem" }}
                >
                  Update
                </button>
                <button
                  className="btn"
                  onClick={() => removeFromCart(index)}
                  style={{ fontSize: "1.5rem" }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <div className="Purchase">
            <h1>No of Iteams: {totalItems}</h1>
            <h1>Total Price: ${totalAmount}</h1>
            <button className="btn" style={{ fontSize: "1.5rem", background:"red"}}>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
