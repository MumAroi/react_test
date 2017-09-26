// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './view/app';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// import react lib
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// import page
import Home from './view/pages/home';
import Artists from './view/pages/artists';
// import App from './view/app';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} ></Route>
                <Route path="/artists/:artistid" component={Artists} ></Route>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));
