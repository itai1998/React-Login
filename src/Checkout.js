import CheckoutProduct from "./CheckoutProduct";
const Checkout = () => {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-9">
                    <h3>Your Shoping Cart</h3>
                    <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct />
                </div>
                <div className="col-3">
                    <h2>Cart</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Checkout;