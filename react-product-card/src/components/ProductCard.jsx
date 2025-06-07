import React, { useState } from "react";
import ProductImage from "../assets/images/image-product-desktop.jpg";
import MobileProductImage from "../assets/images/image-product-mobile.jpg";
import cartIcon from "../assets/images/icon-cart.svg";

const ProductCard = () => {

    const [addedToCart, setAddedToCart] = useState(false);

  return (
    <div className="product-card">
      <div className="product-card-image">
        <picture>
          <source srcSet={MobileProductImage} media="(max-width: 425px)" />
          <img src={ProductImage} alt="Product" />
        </picture>
      </div>
      <div className="product-card-info">
        <div className="product-card-wrapper">
          <h3 className="product-card-category">PERFUME</h3>
          <div className="product-card-name-main">
            <h1 className="product-card-name">
              Gabrielle Esscence Eau De Parfum
            </h1>
          </div>

          <p className="product-card-description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfume-Creater for the House of CHANEL.
          </p>
          <div className="product-card-price">
            <span className="product-card-price-current">$149.99</span>
            <span className="product-card-price-original">
              <s>$169.99</s>
            </span>
          </div>
          {
            addedToCart ? 
          <button id="addToCart"onClick={()=> setAddedToCart(!addedToCart)}className="product-card-btn active">
            Added
          </button> :
           <button id="addToCart" onClick={()=> setAddedToCart(!addedToCart)}className="product-card-btn">
            <img className="svg" src={cartIcon} alt="" /> Add to Cart
          </button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
