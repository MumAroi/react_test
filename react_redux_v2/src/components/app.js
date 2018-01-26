import React, { Component } from 'react';

// step 6 : import search contrainer
import Search from '../contrainers/search';
// step 32 : import list of cars
import ListOfCars from '../contrainers/list_of_cars';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <ListOfCars/>
      </div>
    );
  }
}

export default App;
