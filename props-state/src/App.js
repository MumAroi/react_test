import React, { Component } from 'react';
import logo from './logo.svg';
// fix  PropTypes for react  15.5+
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prpps number: {this.props.propNumber} </h3>
        <h3>prpps obj   : {this.props.propObject.obj1} </h3>
        <h3>prpps string: {this.props.propString} </h3>
        <Parent />
      </div>
    );
  }
}
// fix  PropTypes for react  15.5+
App.PropTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.String,
  PropNumber: PropTypes.Number
}

App.defaultProps = {
  propObject : {
    obj1: "obj1",
    obj2: "obj2",
    obj3: "obj3"
  },
  propString: "por",
  propNumber: 28
}

class Parent extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars : ["s-a", "s-b", "s-c", "s-e"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({cars: this.state.cars.reverse()});
  }
  render() {
    return (
      <div >
        <h2 onClick={this.handleClick}>Hello Parent info</h2>
        <Cars msg="de ja" model="1234" coolcar={this.props.cars}/>
        <Cars msg="de na" model="5678" coolcar={this.state.cars}/>
      </div>
    );
  }
}

Parent.defaultProps = {
  cars : ["a", "b", "c", "e"]
}

class Cars extends Component {
  render() {
    console.log(this.props);
    return (
      <div >
        <h3>My Cars</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolcar.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}</div> 
      </div>
    );
  }
}

export default App;
