import React, { Component } from 'react';
// step 2 : load User component
import User from './user'

class App extends Component {
  constructor(){
    super();
    // step 1 : create state data
    this.state = {
      name:'Francis',
      lastname:'Jones',
      age:25,
      hobbies:['run','jump'],
      spanish:false,
      message(){console.log('hey')},
      car:{brand:"Ford",model:"Focus"},
      mother:'Martha'
    }

  }
  
  render() {
    return (
      // step 3 : user user component and put state
      <User {...this.state} ></User>
    );
  }
}

export default App;
