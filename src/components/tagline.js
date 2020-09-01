import React from 'react'
import {Link} from "react-router-dom"
import image1 from "../image/toy-0.jpg"
import image2 from "../image/toy-1.png"
import image3 from "../image/toy-2.png"
const Tagline=()=> {


    return (
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          style={{ margin: "30px" }}
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                alt="First slide"
                src={image3}
                style={{ width: "80%" }}
              />
            </div>
            <div className="carousel-item" style={{ position: "relative" }}>
              <img
                className="d-block w-100"
src={image2}
                    alt="Second slide"
                style={{ width: "80px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
              src={image1}
                alt="Second slide"
                style={{ width: "80px" }}
              />
            </div>
          </div>

          <div
            className="HH"
            
          >
            <button
              type="button"
        
              className="btn "
            >
              <Link to="/product">Shop Now</Link>
              
            </button>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
}

export default  Tagline;