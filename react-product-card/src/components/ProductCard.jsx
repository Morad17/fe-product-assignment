import React from 'react'
import ProductImage from '../assets/images/image-product-desktop.jpg'
import MobileProductImage from '../assets/images/image-product-mobile.jpg'

const ProductCard = () => {
  return (
    <div className="product-card">
        <div className="product-card-image">
            <img src={ProductImage} alt="Product" />
        </div>
        <div className="product-card-info">
            <h3>Perfume</h3>
            <h1>Gabrielle Esscence Eau De Parfum</h1>
            <p>
                A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfume-Creater for the House of CHANEL.
            </p>
            <div className="product-card-price">
                <span className="product-card-price-current">$149.99</span>
                <span className="product-card-price-original"><s>$169.99</s> </span>
            </div>
            <button className="product-card-button">
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default ProductCard