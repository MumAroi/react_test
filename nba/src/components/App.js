import React, { Component } from 'react';
// step 1 : import react-router-dom
import { BrowserRouter, Route } from 'react-router-dom';
// step 2 : import component
import Header from './header';
import Footer from './footer';
import Home   from './home';
// step 53 : import teams
import Teams from './teams';
class App extends Component {
  render() {
    return (
      // step 3 : set BrowserRouter and Route
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path="/" component={Home} />
          {/* step 54 : create route Teams */}
          <Route exact path="/teams" component={Teams} />
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
