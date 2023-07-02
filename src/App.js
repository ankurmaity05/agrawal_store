import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div ><Link to="/" className="brand">Agrawal Store</Link></div>
            <div>
                <Link to="/grocery">Grocery</Link>
                <Link to="/snacks">Snack</Link>
                <Link to="/clenHome">Clean & Home Essentials</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
        <main>
          <div>
          <Carousel autoPlay={true} infiniteLoop interval={3000} showArrows showThumbs={false}>
                <div>
                    <img src="/Grocery Fotos/main/fruits.jpeg" height={700} width={'auto'} alt='' />
                    
                </div>
                <div>
                    <img src="/Grocery Fotos/main/HomeEssen.jpg" height={700} width={'auto'} alt=''/>
                    
                </div>
                <div>
                    <img src="/Grocery Fotos/main/main.png" height={700} width={'auto'} alt=''/>
                </div>
            </Carousel>
          </div>
        </main>
        <footer className="footer">
            <div>All rights reserved</div>
            </footer>
    </div>
  );
}

export default App;
