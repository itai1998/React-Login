import React from 'react';


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
        <div className="w-50 p-2">

        </div>
        <div className="w-50 p-2">

        </div>
      </div>
    </div>
  );
};

export default Welcome;
