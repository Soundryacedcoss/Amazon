import React, { useContext } from "react";
import "./NaavBar.css";
import { Carousel } from "./carousel";
import { ProductView } from "./ProductView";
import { Footer } from "./Footer";
import img1 from "./Images/logo_01.png";
import img2 from "./Images/logo-02.png";
import img3 from "./Images/Searchlogo.png";
import img4 from "./Images/amazoncart-feat.webp";
import { Link } from "react-router-dom";
import { DataContext } from "./App";
export const Navbar = () => {
  const cartLength=useContext(DataContext)
  console.log(cartLength.cartArr.length);
  return (
    <>
      <div className="NavDiv grid-container">
        <div className="Navdiv1 grid-item">
          <a href="#">
            <img className="logo" src={img1} alt="" />
          </a>
        </div>
        <div className="Navdiv1 grid-item">
          <a href="#">
            <img className="logo" src={img2} alt="" />
          </a>
        </div>
        <select className="select">
          <option>All</option>
          <option>kids</option>
        </select>
        <input className="SearchBar" type="text" placeholder="Search here" />
        <div className="searchlogodiv">
          <img className="logo" src={img3} alt="" />
        </div>
        <select className="select1 ">
          <option>🇮🇳IN</option>
          <option>kids</option>
        </select>
        <div className="Navdiv1 navlink">
          <Link to="/SignIn">Hello,Sign in</Link>
        </div>
        <div className="Navdiv1 navlink">
          <a href="#">Return & order</a>
        </div>
        <div className="Navdiv1 navlink">
        <Link to={"/Cart"}>🛒Cart{cartLength.cartArr.length}</Link>
        </div>
      </div>
      <div className="navRow2">
        <ul>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>sell</li>
          <li className="NavRow2lastLink">Shop great deals</li>
        </ul>
      </div>
      <Carousel />
      <ProductView />
      <Footer />
    </>
  );
};
