import React, { Component } from 'react'

import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="col-md-12 mt-3 align-self-center">
          <SearchBar />
        </div>
        <div>
          <WeatherList/>
        </div>
      </div>
    );
  }
}

export default App;
