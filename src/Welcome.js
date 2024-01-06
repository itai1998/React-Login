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
          <div className="w-50 p-2 bg-white m-2 col">
            <Products
            id={1}
            title = {"Mac Book M3 Pro"}
            image = {"mac-m3-pro.jpg"}
            rating = {4}
            price = {1800}
            />
          </div>
          <div className="w-50 p-2 bg-white m-2 col">
            <Products
            id={2}
            title = {"Water Bottle"}
            image = {"Water-Bottle.jpg"}
            rating = {4}
            price = {10}
            />
          </div>
        </div>
        <div className="p-3 d-flex">
          <div className="p-2 bg-white m-2 col">
            <Products
            id={3}
            title = {"Apple Watch"}
            image = {"Apple-Watch.png"}
            rating = {3}
            price = {890}
            />
          </div>
          <div className="p-2 bg-white m-2 col">
            <Products
            id={4}
            title = {"Gaming Chair"}
            image = {"Gaming-Chair.webp"}
            rating = {5}
            price = {120}
            />
          </div>
          <div className="p-2 bg-white m-2 col">
            <Products
            id={5}
            title = {"Headphone"}
            image = {"Headphone.webp"}
            rating = {3}
            price = {38}
            />
          </div>
        </div>
        <div className="p-3">
          <div className="p-2 bg-white m-2 d-flex justify-content-center col">
            <Products
            id={6}
            title = {"T-Shirt"}
            image = {"T-Shirt.jpg"}
            rating = {1}
            price = {20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
