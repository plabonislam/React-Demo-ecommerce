import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import { KEY_WORD } from "../constant/searchKeyconstants";
import $ from "jquery"; 

const Product = () => {
  const [visi, setvisi] = useState(8);

  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cartList);
  const { carts } = cartList;

  const keyList = useSelector((state) => state.keyList);
  const { keyword } = keyList;

  useEffect(() => {
    console.log(keyword);
    console.log(keyword);
    dispatch(listProducts(keyword));
    console.log(keyword);
  }, [keyword]);

  const handle = (it) => {
    console.log(carts.length);

    it.quantity = 1;
    const found = carts.find((element) => element === it);
    if (found === undefined) {
      dispatch(addToCart([...carts, it]));
      alert("product is added to cart")
    } else alert("product already exist in cart");
  };

  const handleLoadmore = () => {
    setvisi((visi) => visi + 8);
  };

  return loading ? (
    <div>loading... </div>
  ) : (
    <div className="container-fluid">
      {products.slice(0, visi).map((it, k) => (
        <div
          className="card"
          style={{
            width: "290px",

            display: "inline-block",
            margin: "10px",

            textAlign: "center",
          }}
          key={k}
        >
          <img className="card-img-top" src={it.image} alt="Card image cap" />
          <div className="card-body">
            <p className="card-title">{it.Title}</p>
            <p className="card-text">{it.price}</p>
            <button
              type="button"
              onClick={() => handle(it)}
              className="btn btn-outline-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}

      {products.length > 8 ? (
        <div className="col-md-12 text-center" style={{ marginBottom: "25px" }}>
          <button
            type="button"
            onClick={handleLoadmore}
            className="btn btn-primary"
          >
            Load More
          </button>
        </div>
      ) : (
        ""
      )}

      {products.length == 0 ? (
        <div
          className="col-md-12 text-center"
          style={{
            height: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "red" }}>
            <strong>No Item Exist For This Search key</strong>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
