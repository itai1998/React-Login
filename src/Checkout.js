import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
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
                    <Subtotal />
                </div>
            </div>
        </div>
     );
}
 
export default Checkout;