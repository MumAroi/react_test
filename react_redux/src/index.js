import React from 'react';
import ReactDOM from 'react-dom';
// step 1 : import react-redux
import { Provider } from 'react-redux';
// step 3 : import redux
import { createStore, applyMiddleware } from 'redux';
// step 4 : import reducers
import reducers from './reducers';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// step 5 : create const valiable for store 
const createStoreWithApllyMiddleware = createStore(reducers, applyMiddleware())
ReactDOM.render(
    // step 2 : create Provider
    <Provider
    //  step 6 : use store 
    store ={createStoreWithApllyMiddleware}
    >
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
