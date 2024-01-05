import React from 'react';
import Products from './Products';


const Welcome = () => {

  return (
    <div>
      <div className="w-100" >
        <img
      src="/Images/ecommerce.jpg"
      alt="ecommerce"
      className="w-100 h-100"
      style={{ objectFit: "cover" }}
      />
      </div>
      <div className="products bg-light">
        <div className="p-3 d-flex">
          <div className="w-50 p-2 bg-white m-2">
            <Products />
          </div>
          <div className="w-50 p-2 bg-white m-2">
            <Products />
          </div>
        </div>
        <div className="p-3 d-flex">
          <div className="p-2 bg-white m-2">
            <Products />
          </div>
          <div className="p-2 bg-white m-2">
            <Products />
          </div>
          <div className="p-2 bg-white m-2">
            <Products />
          </div>
        </div>
        <div className="p-3">
          <div className="p-2 bg-white m-2 d-flex justify-content-center">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
