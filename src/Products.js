import React from 'react';

const Products = ({ id, title, image, rating, price }) => {
  return (
    <div className="d-flex flex-column p-2">
      <h4>{title}</h4>
      <strong>${price}</strong>
      <p>
        {Array(rating).fill().map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </p>
      <div className="d-flex flex-column align-items-center">
        <img src={`/Images/${image}`} alt="mac-m3-pro" className="w-50 mt-1"/>
        <button className="btn btn-warning w-auto mt-3">Add Product</button>
      </div>
    </div>
  );
}

export default Products;
