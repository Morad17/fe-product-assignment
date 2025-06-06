import React from 'react'
import ProductImage from '../assets/images/image-product-desktop.jpg'
import MobileProductImage from '../assets/images/image-product-mobile.jpg'
import cartIcon from '../assets/images/icon-cart.svg'

const ProductCard = () => {
  return (
    <div className="product-card">
        <div className="product-card-image">
            <img src={ProductImage} alt="Product" />
        </div>
        <div className="product-card-info">
            <div className="product-card-wrapper">
                <h3 className="product-card-category">PERFUME</h3>
                <div className="product-card-name-main">
                                <h1 className="product-card-name">Gabrielle</h1>
            <h1 className="product-card-name">Esscence Eau</h1>
            <h1 className="product-card-name">De Parfum</h1>
                </div>


            <p className="product-card-description">
                A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfume-Creater for the House of CHANEL.
            </p>
            <div className="product-card-price">
                <span className="product-card-price-current">$149.99</span>
                <span className="product-card-price-original"><s>$169.99</s> </span>
            </div>
                <button className="product-card-btn">
                    <img className="svg"src={cartIcon} alt="" /> Add to Cart
                </button> 
            </div>
        </div>
    </div>
  )
}

export default ProductCard