import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // 1 get default state
  constructor(props){
    super(props);

    // 2 set inital state
    this.state = {
       title : "Hello Naja",
       body : "inital body state"
    }
  }
  //  before a mounted component receives new props
  componentWillReceiveProps(){
    console.log("before receive props");
  }

  // 3 before gets created
  componentWillMount(){
    console.log("before component gets created");
  }

  // 3.1 before rendering  when new props or state 
  componentWillUpdate(){
    console.log("before update");
  }
  // 3.2  after updating new props or state occurs
  componentDidUpdate(){
    console.log("after update");
  }

  // 3.3 before rendering when new props or state are being received 
  shouldComponentUpdate(nextProps, nextState){
    // if(nextState.title === "NEW TITLE" ){
    //   console.log(this.state.title);
    //   console.log(nextState);
    //   return false;
    // }
    return true;
  }

  // 4 resder jsx
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{marginBottom : "20px"}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
          <div>{this.state.body}</div>
          <div onClick={()=>{this.setState({title:"NEW TITLE"})}}> Click to change</div>
      </div>
    );
  }

  // 5 after a component is mounted
  componentDidMount(){
    console.log("after a component is mounted");
  }

  // 5.1 before a component is unmounted and destroyed 
  componentWillUnmount(){
    console.log("unmount");
  }
}

export default App;
