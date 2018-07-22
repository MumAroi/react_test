import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import Reducers  from './reducers'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <App/>
    </Provider> 
    , document.getElementById('root'));
registerServiceWorker();
