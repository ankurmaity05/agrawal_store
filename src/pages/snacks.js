import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import snack from '../Components/snack';

function Snacks(){
    return (
        <>
        <div className="grid-container">
      <header className="row">
        <div><Link to="/" className="brand">Agrawal Store</Link></div>
        <div>
            <Link to="/grocery">Grocery</Link>
            <Link to="/snacks">Snack</Link>
            <Link to="/cleanHome">Clean & Home Essentials</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
        </div>
    </header>
      </div>
      <main>
      <div className='products'>
          {snack.product.map(product => (
            <div className='product' key={product.slug}>
              
                <img src={product.image} alt={product.name} height={200} width={200} />
              
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <div className="rating">
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star"></i> </span>
                  <span> <i className="fa fa-star-half-o"></i> </span>
                </div>
                <p><strong>{product.price}</strong></p>
                <button>Add to cart</button>
              </div>
            </div>))
          }</div>
      </main>
      
        </>
    );
}

export default Snacks