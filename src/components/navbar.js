import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { updateProducts, listProducts } from "../actions/productActions";
import { setKeyWord } from "../actions/seachActions";

import imagepath from "../image/pp.png"

const Navbar = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  const { carts } = cartList;

  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

//  const[ser,setSer]=useState("");
  useEffect(() => {
    if (localStorage.getItem("cartStorage")) {
      let cartStore = localStorage.getItem("cartStorage");
      cartStore = JSON.parse(cartStore);
      dispatch(addToCart([...cartStore]));
    }

    // const result = products.filter((item) =>
    //   item.Title.includes(ser)
    // );
    
    // dispatch(updateProducts(result));
  }, []);

  const handleChange = async (e) => {
  dispatch(setKeyWord(e.target.value));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={imagepath}  style={{height:"50px"}}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              onChange={handleChange}
            />
          </form>

          <ul className="navbar-nav ml-auto" style={{ marginRight: "100px" }}>
            <li className="nav-item active" style={{ marginRight: "40px" }}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item active" style={{ marginRight: "40px" }}>
              <Link className="nav-link" to="/product">
                Shop
              </Link>
            </li>
            <li className="nav-item active" style={{ marginRight: "40px" }}>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item active" style={{ marginRight: "40px" }}>
              <Link className="nav-link" to="/">
                Help
              </Link>
            </li>

            <li className="nav-item active" style={{ marginRight: "40px" }}>
              <Link className="nav-link" to="/cart">
                <i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                      {carts.length>0 ?(carts.length):""}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
