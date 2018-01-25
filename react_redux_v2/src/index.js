import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

// step 1 : BrowserRouter and Route from react router
import { BrowserRouter, Route } from 'react-router-dom';
// step 4 : Care component
import Car from './components/car';
// step 7 : css 
import './index.css';
// step 12 : provider 
import { Provider } from 'react-redux';
// step 13 : createstore and applymiddleware
import { createStore, applyMiddleware} from 'redux';
// step 16 : reducers
import reducers from './reducers';
// step 14 : create store
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    // step 15 : make provider
    <Provider store={createStoreWithMiddleware(reducers)}>
        {/* step 2 : make route */}
        <BrowserRouter>
            <div>
                {/* step 3 : create route */}
                <Route exact path="/" component={App} ></Route>
                <Route path="/car/:id" component={Car}></Route>
            </div>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
