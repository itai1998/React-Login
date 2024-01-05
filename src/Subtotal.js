const Subtotal = () => {
    return ( 
        <div className="bg-light p-4">
            <p>Subtotal (0 items): $0</p>
            <input type="checkbox" /> this order contains a gift
            <button className="btn btn-warning rounded-0 w-100 mt-2">Proceed to Checkout</button>
        </div>
     );
}
 
export default Subtotal;