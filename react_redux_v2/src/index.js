import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

// step 1 : import BrowserRouter and Route from react router
import { BrowserRouter, Route } from 'react-router-dom';
// step 4 : import Care component
import Car from './components/car';
// step 7 : import css 
import './index.css';

ReactDOM.render(
    // step 2 : make route
    <BrowserRouter>
        <div>
            {/* step 3 : create route */}
            <Route exact path="/" component={App} ></Route>
            <Route path="/car/:id" component={Car}></Route>
        </div>
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
