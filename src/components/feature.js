import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listFeature } from "../actions/featureActions";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { addToCart } from "../actions/cartActions";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 550 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};

const Feature = () => {
  const featureList = useSelector((state) => state.featureList);
  const { floading, features } = featureList;
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cartList);
  const { carts } = cartList;

  useEffect(() => {
    dispatch(listFeature());
  }, []);

  const handle = (it) => {
    console.log(carts.length);

    it.quantity = 1;
    const found = carts.find((element) => element === it);
    if (found === undefined) {
      dispatch(addToCart([...carts, it]));
            alert("product is added to cart");

    } else alert("product already exist in cart");

  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Feature Products</h1>
      <Carousel responsive={responsive}>
        {features.map((item,k) => (
          <div
            style={{
              margin: "5px",
              width: "300px",
              border: "2px solid gray",
            }}
            key={k}
          >
            <img
              className="card-img-top"
              src={item.image}
              alt="Card image cap"
            />
            <div
              style={{
                padding: "5px",
                borderTop: "1px solid gray",
                textAlign: "center",
              }}
            >
              <p className="text">{item.Title}</p>
              <p className="text">{item.price}</p>

              <button
                type="button"
                onClick={() => handle(item)}
                className="btn btn-outline-primary"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Feature;
