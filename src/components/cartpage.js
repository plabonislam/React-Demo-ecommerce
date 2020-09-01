import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { setSubTotal } from "../actions/seachActions";

const Cartpage = () => {
  const cartList = useSelector((state) => state.cartList);
  const { carts } = cartList;
const dispatch = useDispatch();
  
  let history = useHistory();
const subTotalList = useSelector((state) => state.subTotalList);

    
      const {sTotal} = subTotalList;
  useEffect(() => {
    if (localStorage.getItem("cartStorage")) {
     let cartStore = localStorage.getItem("cartStorage");
     cartStore = JSON.parse(cartStore);
    dispatch(setSubTotal([...cartStore]));
    }
  }, []);

  const handle=(cu)=>{
    for(let it of carts){
      if(it.id == cu.id){
        it.quantity++;
      }
    }
 dispatch(addToCart([...carts]));
  dispatch(setSubTotal([...carts]));
  }


  const handleRemove=(cu)=>{
    for (let it of carts) {
      if (it.id == cu.id && it.quantity>0) {
        it.quantity--;
      }
    }
    dispatch(addToCart([...carts]));
    dispatch(setSubTotal([...carts]));

  }

const RemoveAll=()=>{
   dispatch(addToCart([]));
   dispatch(setSubTotal([...carts]));
    history.push("/")
}

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-sm-8 col-xs-8  col-md-8 col-lg-8"
          style={{ textAlign: "center" }}
        >
          <h1>Shopping-Cart</h1>
          <hr />
          {carts.map((item) => (
            <div className="row">
              <div className="col-sm-3 col-xs-3  col-md-3 col-lg-3 ">
                <img
                  src={item.image}
                  alt={item.Title}
                  style={{ height: "100px", width: "100px" }}
                />
              </div>
              <div
                className="cart-body col-sm-4 col-xs-6  col-md-4 col-lg-4"
                
              >
                <p>{item.Title} </p>
                <p>{item.price}</p>
              </div>
              <div
                className=" cart-btn col-sm-4 col-xs-3  col-md-4 col-lg-4"

              >
                <p>
                  <span onClick={() => handle(item)}>
                    <i class="fa fa-plus-circle" aria-hidden="true"></i>
                  </span>

                  <span style={{ border: "2px solid gray", padding: "5px" }}>
                    {item.quantity}
                  </span>

                  <span onClick={() => handleRemove(item)}>
                    <i class="fa fa-minus-circle" aria-hidden="true"></i>
                  </span>
                </p>
              </div>
            </div>
          ))}
          {carts.length > 0 ? <hr /> : ""}
          {carts.length > 0 ? (
            <div className="row" style={{marginBottom:"30px"}}>
              <div className="col-sm-6 col-xs-6  col-md-4 col-lg-4">
                <button type="button" className="btn btn-primary cartNext">
                  Next
                </button>
              </div>
              <div className="col-sm-5 col-xs-6  col-md-4 col-lg-4">
                <button
                  type="button"
                  className="btn btn-primary cartCancel"
                  onClick={RemoveAll}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="col-sm-4 col-xs-4  col-md-4 col-lg-4"
          style={{ textAlign: "center" }}
        >
          <h1> Summary</h1>
          <hr />
          <input type="text" placeholder="enter your cupon" />
          <hr />
          <div className="well">
            <p>SubTotal - {sTotal}$</p>
            <p>Shipping - Free</p>
            <p>Total Tax - 13$</p>
            <hr />
            <p> Total Cost -{13 + sTotal}$ </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cartpage;
