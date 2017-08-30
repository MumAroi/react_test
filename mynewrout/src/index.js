import React from 'react';
import ReactDOM from 'react-dom';
//  import react rout lib 
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
// css import
import './index.css';
// js import
import App from './App';
import Home from './Home';
import Contact from './Contact'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <ul>
                {/* create link */}
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact-me</Link></li>
            </ul>
            <hr />

            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>

        </div>
    </Router>    
, document.getElementById('root'));
registerServiceWorker();
