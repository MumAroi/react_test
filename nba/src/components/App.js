import React, { Component } from 'react';
// step 1 : import react-router-dom
import { BrowserRouter, Route } from 'react-router-dom';
// step 2 : import component
import Header from './header';
import Footer from './footer';
import Home   from './home';
class App extends Component {
  render() {
    return (
      // step 3 : set BrowserRouter and Route
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
