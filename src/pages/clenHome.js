import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

function ClenHome() {
  return (
      <div className="grid-container">
        <header className="row">
        <div><Link to="/" className="brand">Agrawal Store</Link></div>
        <div>
            <Link to="/grocery">Grocery</Link>
            <Link to="/snacks">Snack</Link>
            <Link to="/clenHome">Clean & Home Essentials</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">Sign In</Link>
        </div>
    </header>
    <div className="row center">
        
        <div className="card">
           
            <Link to="product">
                
                <img className="medium" src="/Grocery Fotos/atta and flours/fortune-atta.jpg" height="200" width="200" alt="Fortune-Atta"/>
            </Link>
        <div className="card-body">
            <Link to="product">
                <h2>Fortune Atta</h2>
            </Link>
            <div className="rating">
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star-half"></i> </span>
            </div>
            <div className="price">
                Rs. 300
            </div>
       </div>
    </div>
    <div className="card">
        <Link to="product">
            <img className="medium" src="/Grocery Fotos/atta and flours/aashirvaad-atta.jpg" height="200" width="200" alt="Aashirvaad-atta"/>
        </Link>
    <div className="card-body">
        <Link to="product">
            <h2>Aashirvaad Atta</h2>
        </Link>
        <div className="rating">
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
        </div>
        <div className="price">
            Rs. 250
        </div>
   </div>
</div>
<div className="card">
    <Link to="product">
        <img className="medium" src="/Grocery Fotos/atta and flours/fortune-maida.jpg" height="200" width="200" alt="Fortune-maida"/>
    </Link>
<div className="card-body">
    <Link to="product">
        <h2>Fortune Maida</h2>
    </Link>
    <div className="rating">
        <span> <i className="fa fa-star"></i> </span>
        <span> <i className="fa fa-star"></i> </span>
        <span> <i className="fa fa-star"></i> </span>
        <span> <i className="fa fa-star"></i> </span>
        <span> <i className="fa fa-star"></i> </span>
    </div>
    <div className="price">
        Rs. 250
    </div>
</div>
</div>
<div className="card">
<Link to="product">
    <img className="medium" src="/Grocery Fotos/atta and flours/fortune-suji.jpg" height="200" width="200" alt="Fortune-Suji"/>
</Link>
<div className="card-body">
<Link to="product">
    <h2>Fortune Suji</h2>
</Link>
<div className="rating">
    <span> <i className="fa fa-star"></i> </span>
    <span> <i className="fa fa-star"></i> </span>
    <span> <i className="fa fa-star"></i> </span>
    <span> <i className="fa fa-star"></i> </span>
    <span> <i className="fa fa-star"></i> </span>
</div>
<div className="price">
    Rs. 250
</div>
</div>
</div>
<div className="card">
    <Link to="product">
        <img className="medium" src="/Grocery Fotos/rice/basmati.jpg" height="200" width="200" alt="Basmati Rice"/>
    </Link>
    <div className="card-body">
    <Link to="product">
        <h2>Daawat Basmati Rice</h2>
    </Link>
    <div className="rating">
        <span> <i className="fa fa-star"></i> </span>
        <span> <i className="fa fa-star"></i> </span>
        <span> <i className="fa fa-star"></i> </span>
        <span> <i className="fa fa-star"></i> </span>
        <span> <i className="fa fa-star"></i> </span>
    </div>
    <div className="price">
        Rs. 250
    </div>
    </div>
    </div>
    <div className="card">
        <Link to="product">

            <img className="medium" src="/Grocery Fotos/rice/brown-rice.jpg" height="200" width="200" alt="Fortune-Suji"/>
        </Link>
        <div className="card-body">
        <Link to="product">
            <h2>Fortune Suji</h2>
        </Link>
        <div className="rating">
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
            <span> <i className="fa fa-star"></i> </span>
        </div>
        <div className="price">
            Rs. 250
        </div>
        </div>
        </div>
        <div className="card">
            <Link to="product">
    
                <img className="medium" src="/Grocery Fotos/rice/white-rice.jpg" height="200" width="200" alt="Fortune-Suji"/>
            </Link>
            <div className="card-body">
            <Link to="product">
                <h2>Fortune Suji</h2>
            </Link>
            <div className="rating">
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
                <span> <i className="fa fa-star"></i> </span>
            </div>
            <div className="price">
                Rs. 250
            </div>
            </div>
            </div>
            <div className="card">
                <Link to="product">
        
                    <img className="medium" src="/Grocery Fotos/noodle and pasta/maggi.jpg" height="200" width="250" alt="Fortune-Suji"/>
                </Link>
                <div className="card-body">
                <Link to="product">
                    <h2>Fortune Suji</h2>
                </Link>
                <div className="rating">
                    <span> <i className="fa fa-star"></i> </span>
                    <span> <i className="fa fa-star"></i> </span>
                    <span> <i className="fa fa-star"></i> </span>
                    <span> <i className="fa fa-star"></i> </span>
                    <span> <i className="fa fa-star"></i> </span>
                </div>
                <div className="price">
                    Rs. 250
                </div>
                </div>
                </div>
                <div className="card">
                    <Link to="product">
            
                        <img className="medium" src="/Grocery Fotos/noodle and pasta/macroni.jpg" height="200" width="200" alt="Fortune-Suji"/>
                    </Link>
                    <div className="card-body">
                    <Link to="product">
                        <h2>Fortune Suji</h2>
                    </Link>
                    <div className="rating">
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                        <span> <i className="fa fa-star"></i> </span>
                    </div>
                    <div className="price">
                        Rs. 250
                    </div>
                    </div>
                    </div>
    </div>
 </div>
  )
}

export default ClenHome
