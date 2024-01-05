const Products = () => {
    return ( 
        <div className="d-flex flex-column">
            <h2>Title of Product</h2>
            <strong>$12</strong>
            {/* How to type emoji in the text editer */}
            <p>⭐⭐⭐</p>
            <div className="d-flex flex-column align-items-center">
                <img src="/Images/mac-m3-pro.jpg" alt="mac-m3-pro" className="w-50 mt-1"/>
                <button className="btn btn-warning w-suto mt-3">Add Product</button>
            </div>
        </div>
     );
}
 
export default Products;