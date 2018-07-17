import React, { Component } from 'react'
import SearchBar from '../components/search_bar'

const API_KEY = "AIzaSyCqjaLUdTMEAXsFShA_f-QWVnZSsOUD5Io"

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App
