const CheckoutProduct = () => {
    return ( 
        <div className="d-flex mb-3">
            <div style={{width: "160px"}}>
                <img src="/Images/mac-m3-pro.jpg" className='w-100' alt="m3-pro"/>
            </div>
            <div className="ms-4">
                <h4>Title</h4>
                <span>$12</span>
                <p>⭐⭐⭐</p>
                <button className="btn btn-sm rounded-0 btn-warning">Remove From Cart</button>
            </div>
        </div>
        
     );
}
 
export default CheckoutProduct;