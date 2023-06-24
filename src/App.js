import React from 'react';
import { Link } from 'react-router-dom';

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
        
        </main>
        <footer className="footer">
            <div>All rights reserved</div>
            </footer>
    </div>
  );
}

export default App;
