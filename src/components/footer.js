import React from "react";
import imagepath from "../image/pp.png";
const Footer = () => {
  return (
    <div>
      <footer
        class="page-footer font-small mdb-color pt-4"
        style={{ backgroundColor: "gray", color: "black" }}
      >
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left mt-3 pb-3">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Toy Store</h6>
              <img src={imagepath} style={{ height: "50px" }} />
              <p>
                Here you can Buy toys to increase your toy store. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a href="#!">Best Toy Producs</a>
              </p>
              <p>
                <a href="#!">New Toys</a>
              </p>
              <p>
                <a href="#!">Super Hero</a>
              </p>
              <p>
                <a href="#!">Animey\</a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a href="#!">Your Account</a>
              </p>
              <p>
                <a href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a href="#!">Shipping Rates</a>
              </p>
              <p>
                <a href="#!">Help</a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>Ranisonkail,Thakurgaon BD</p>
              <p>info@gmail.com</p>
              <p>+ 01 78982600</p>
              <p>+880177777777</p>
            </div>
          </div>

          <hr />
        </div>
      </footer>
    </div>
  );
};
export default Footer;
