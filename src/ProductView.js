import React, { useContext, useState } from "react";
import { DataContext } from "./App";
import productDetail from './ProductDetail'
import './ProductView.css'
const products=productDetail
export const ProductView = () => {
  // Add to cart  button functinality for adding the product to cart

   // using context
   const data = useContext(DataContext);
   const AddToCart = (event) => {
     console.log(event.target.value);
     for (let i = 0; i < productDetail.length; i++) {
       if (event.target.value === productDetail[i].id) {
         console.log(productDetail[i].id);
         if (productDetail[i].quantity < 1) {
           alert("Product added to cart");
           productDetail[i].quantity += 1;
           data.cartArr.push(productDetail[i]);
           data.setCartArr([...data.cartArr]);
           console.log(data.cartArr);
         } else if (productDetail[i].quantity >= 1) {
           alert("Product added to cart");
           productDetail[i].quantity += 1;
           data.setCartArr([...data.cartArr]);
         }
       }
     }
   };
  return (
    <div>
     <div id="main">
        <div id="products">
          {products.map((item) => (
            <div className="product">
              {" "}
              <div>
                {" "}
                <img className='ProductImg' src={item.image} alt="" srcset="" />{" "}
              </div>{" "}
              <p>
                {" "}
                <h2 className="title">{item.name}</h2>{" "}
                <span>₹{item.price}</span> <br />
                <span>{item.rating}</span>
              </p>{" "}
              <button
                value={item.id}
                className="add-to-cart"
                onClick={AddToCart}
              >
                Add to CART
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  
  )
}
