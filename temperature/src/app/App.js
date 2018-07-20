import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="col-md-10 mt-3 align-self-center">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
