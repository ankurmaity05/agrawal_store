import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ReactModal from 'react-modal';
import CleanHome from '../Components/clenHome';
import './style.css'

function ClenHome() {
  const[isOpen,setIsOpen] = useState(false);
  const[product,setProduct] = useState({});
  return (
    <>
    <ReactModal isOpen={isOpen} style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      height: '500px',
      width: '500px',
      top: '40px',
      left: '30%',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }}}
    >
      <p>{product.name}</p>
      <p>{product.description}</p>
      <button onClick={()=>{setIsOpen(false)}}>Close</button>
    </ReactModal>
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
    <main>
    <div className="products">
    {CleanHome.product.map(product=>(
      <div className="product">
        <img src={product.image} alt={product.slug} height={200} width={200} onClick={()=>{setIsOpen(true); setProduct(product); }} />
      <div className='product-info'>
        <Link to ={`product/${product.name}`}>
          <p>{product.name}</p>
          </Link>
          <p><strong>{product.price}</strong></p>
      <button>Add to Cart</button>
      </div>
      </div>
    ))}
    </div>
    </main>
 </div>
  </>
  )
}

export default ClenHome
