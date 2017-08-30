import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
// createBrowserHistory for react-rout v4^
import { createBrowserHistory } from 'history'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={createBrowserHistory}>

    </Router>
, document.getElementById('root'));
registerServiceWorker();
