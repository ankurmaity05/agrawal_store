import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
function Snacks() {
  return (
    <div  className="grid-container">
        <header  className="row">
            <div><Link to="/"  className="brand">Agrawal Store</Link></div>
            <div>
                <Link to="/grocery">Grocery</Link>
                <Link to="/snacks">Snack</Link>
                <Link to="/clenHome">Clean & Home Essentials</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
        <div  className="row center">
            <div  className="card">
                <Link to="/product">
                    <img  className="medium" src="/Grocery Fotos/namkeens/prd-khasta.jpg" height="200" width="200" alt="Khasta"/>
                </Link>
            <div  className="card-body">
                <Link to="/product">
                    <h2>Fortune Atta</h2>
                </Link>
                <div  className="rating">
                    <span> <i  className="fa fa-star"></i> </span>
                    <span> <i  className="fa fa-star"></i> </span>
                    <span> <i  className="fa fa-star"></i> </span>
                    <span> <i  className="fa fa-star"></i> </span>
                    <span> <i  className="fa fa-star"></i> </span>
                </div>
                <div  className="price">
                   Rs. 300
                </div>
           </div>
        </div>
        <div  className="card">
            <Link to="/product">
                <img  className="medium" src="/Grocery Fotos/namkeens/haldiram-aloobhujiya.jpg" height="200" width="200" alt="Aaloo-bhujiya"/>
            </Link>
        <div  className="card-body">
            <Link to="/product">
                <h2>Aashirvaad Atta</h2>
            </Link>
            <div  className="rating">
                <span> <i  className="fa fa-star"></i> </span>
                <span> <i  className="fa fa-star"></i> </span>
                <span> <i  className="fa fa-star"></i> </span>
                <span> <i  className="fa fa-star"></i> </span>
                <span> <i  className="fa fa-star"></i> </span>
            </div>
            <div  className="price">
                Rs. 250
            </div>
       </div>
    </div>
    <div  className="card">
        <Link to="product">
            <img  className="medium" src="/Grocery Fotos/biscuits/bounce-orange.jpg" height="200" width="200" alt="Bounce"/>
        </Link>
    <div  className="card-body">
        <Link to="product">
            <h2>Fortune Maida</h2>
        </Link>
        <div  className="rating">
            <span> <i  className="fa fa-star"></i> </span>
            <span> <i  className="fa fa-star"></i> </span>
            <span> <i  className="fa fa-star"></i> </span>
            <span> <i  className="fa fa-star"></i> </span>
            <span> <i  className="fa fa-star"></i> </span>
        </div>
        <div  className="price">
            Rs. 250
        </div>
    </div>
    </div>
    <div  className="card">
    <Link to="product">
        <img  className="medium" src="/Grocery Fotos\biscuits\happy-happy.jpg" height="200" width="100" alt="Happy-happy"/>
    </Link>
    <div  className="card-body">
    <Link to="product">
        <h2>Fortune Suji</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 250
    </div>
    </div>
    </div>
    <div  className="card">
        <Link to="product">
             
            <img  className="medium" src="/Grocery Fotos/Linktta and flours/fortune-atta.jpg" height="200" width="200" alt="Fortune-Atta"/>
        </Link>
    <div  className="card-body">
        <Link to="product">
            <h2>Fortune Atta</h2>
        </Link>
        <div  className="rating">
            <span> <i  className="fa fa-star"></i> </span>
            <span> <i  className="fa fa-star"></i> </span>
            <span> <i  className="fa fa-star"></i> </span>
            <span> <i  className="fa fa-star"></i> </span>
            <span> <i  className="fa fa-star"></i> </span>
        </div>
        <div  className="price">
            Rs. 300
        </div>
   </div>
</div>
<div  className="card">
    <Link to="product">
         
        <img  className="medium" src="\Grocery Fotos\biscuits\marie-gold.jpg" height="200" width="200" alt="Marie Gold"/>
    </Link>
<div  className="card-body">
    <Link to="product">
        <h2>Fortune Atta</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 300
    </div>
</div>
</div>
<div  className="card">
    <Link to="product">
         
        <img  className="medium" src="/Grocery Fotos/Linktta and flours/fortune-atta.jpg" height="200" width="200" alt="Fortune-Atta"/>
    </Link>
<div  className="card-body">
    <Link to="product">
        <h2>Fortune Atta</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 300
    </div>
</div>
</div>
<div  className="card">
    <Link to="product">
         
        <img  className="medium" src="/Grocery Fotos/Linktta and flours/fortune-atta.jpg"Linka h height="200" width="200" alt="Fortune-Atta"/>
    </Link>
<div  className="card-body">
    <Link to="product">
        <h2>Fortune Atta</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 300
    </div>
</div>
</div>
<div  className="card">
    <Link to="product">
         
        <img  className="medium" src="/Grocery Fotos/Linktta and flours/fortune-atta.jpg" height="200" width="200" alt="Fortune-Atta"/>
    </Link>
<div  className="card-body">
    <Link to="product">
        <h2>Fortune Atta</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 300
    </div>
</div>
</div>
<div  className="card">
    <Link to="product">
         
        <img  className="medium" src="/Grocery Fotos/Linktta and flours/fortune-atta.jpg" height="200" width="200" alt="Fortune-Atta"/>
    </Link>
<div  className="card-body">
    <Link to="product">
        <h2>Fortune Atta</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 300
    </div>
</div>
</div>
<div  className="card">
    <Link to="product">
         
        <img  className="medium" src="/Grocery Fotos/Linktta and flours/fortune-atta.jpg" height="200" width="200" alt="Fortune-Atta"/>
    </Link>
<div  className="card-body">
    <Link to="product">
        <h2>Fortune Atta</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 300
    </div>
</div>
</div>
<div  className="card">
    <Link to="product">
         
        <img  className="medium" src="/Grocery Fotos/Linktta and flours/fortune-atta.jpg" height="200" width="200" alt="Fortune-Atta"/>
    </Link>
<div  className="card-body">
    <Link to="product">
        <h2>Fortune Atta</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 300
    </div>
</div>
</div>
<div  className="card">
    <Link to="product">
         
        <img  className="medium" src="/Grocery Fotos/Linktta and flours/fortune-atta.jpg" height="200" width="200" alt="Fortune-Atta"/>
    </Link>
<div  className="card-body">
    <Link to="product">
        <h2>Fortune Atta</h2>
    </Link>
    <div  className="rating">
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
        <span> <i  className="fa fa-star"></i> </span>
    </div>
    <div  className="price">
        Rs. 300
    </div>
</div>
</div>
    </div>
    </div>
  )
}

export default Snacks
