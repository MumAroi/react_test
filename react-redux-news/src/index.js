import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// step 1 : react redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
// step 4 : reducers
import reducers from './reducers';
// step 3 : create store
const createStoreWidthMiddleware = applyMiddleware(promiseMiddleware)(createStore);
ReactDOM.render(
    //  step 2 : set up Provider and reducers
    <Provider store={createStoreWidthMiddleware(reducers)}>
        <App />        
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
