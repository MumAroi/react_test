import React, { Component } from 'react';

// step 6 : import search contrainer
import Search from '../contrainers/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
      </div>
    );
  }
}

export default App;
