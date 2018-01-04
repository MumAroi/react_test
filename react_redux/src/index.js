import React from 'react';
import ReactDOM from 'react-dom';
// step 1 : import react-redux
import { Provider } from 'react-redux';
// step 3 : import redux
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
// step 6 : import reducers
import reducers from './reducers';
// step 4 : create const valiable for store 
let createStoreWithApllyMiddleware = createStore(reducers, applyMiddleware())
ReactDOM.render(
    // step 2 : create Provider
    <Provider
    //  step 5 : use store 
    store ={createStoreWithApllyMiddleware}
    >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
