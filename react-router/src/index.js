import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Route, Switch}  from 'react-router-dom';

// import './index.css';

import App from './view/app';
import Post from './view/pages/post'
import PostItem from './view/pages/post_item'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <Link to="/" >Home</Link><br/>
                <Link to="/post" >Post</Link><br/>
            </header>
            <Switch>
                <Route path="/post/:id" component={PostItem}  />
                <Route path="/post" component={Post}  />
                <Route exact path="/" component={App}  />
            </Switch>
        </div>
    </BrowserRouter>
    , document.querySelector('#root'));
registerServiceWorker();
