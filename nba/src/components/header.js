// step 4 :  import react and link
import React from 'react';
import {Link} from 'react-router-dom';

// step 5 : create function Header
const Header = () => {
    return (
        // step 13 : create header
        <header>
            <div className="flexbox-container">
                <Link to="/" className="logo">
                    <span></span>
                </Link>
                <nav>
                    <Link to="/teams">Teams</Link>
                </nav>
            </div>
        </header>
    );
}

// step 6 : export function 
export default Header;