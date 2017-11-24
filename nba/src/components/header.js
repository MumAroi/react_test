// step 4 :  import react and link
import React from 'react';
import {Link} from 'react-router-dom';

// step 5 : create function Header
const Header = () => {
    return (
        <header>
            <div className="flexbox-container">
                <Link to="/" className="logo">
                    <span></span>
                </Link>
                <nav>
                    <Link to="/theams">Theams</Link>
                </nav>
            </div>
        </header>
    );
}

// step 6 : export function 
export default Header;