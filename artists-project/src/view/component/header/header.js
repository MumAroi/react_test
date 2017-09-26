import React from 'react';
import {Link} from 'react-router-dom';

import './css/header.css';

const Header = () => {
    return(
        <header>
            <Link to='/'  > Artists Name </Link>
        </header>
    );
}

export default Header;