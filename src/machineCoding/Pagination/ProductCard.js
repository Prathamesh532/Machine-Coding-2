import React from "react";
import "./style.css";

const ProductCard = ({ thumbnail, title, price, brand }) => {
  return (
    <div className="prodCard-container">
      <div className="img__container">
        <img src={thumbnail} alt="product-image" />
      </div>
      <h2 className="product-brand">Brand : {brand}</h2>
      <h4 className="product-title">Name :  {title}</h4>
      <h4 className="product-title" >Price : ${price}</h4>
      
    </div>
  );
};

export default ProductCard;
