import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from "./Coursesales";

class App extends Component {
  render() {
    var course = [
      { name: 'Complete iOS10 dev course', price: 199},
      { name: 'Complete pentesting course', price: 200},
      { name: 'Complete front end dev course', price: 150},
      { name: 'Bug Bounty and web app pentesting', price: 170}
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchase</h2>
        </div>
        <Coursesales item={course} />
      </div>
    );
  }
}

export default App;
