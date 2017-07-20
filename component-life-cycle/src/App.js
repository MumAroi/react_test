import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      r:0
    }
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }
  getRandomNumber(){
    this.setState({r:Math.floor(Math.random()*100)})
    // console.log('Random Number');
  }
  render() {
    return (
      <div >
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}> Random Number</button>
        <br />
        <br />
        {this.state.r}
        <Numbers myNumber={this.state.r} />
      </div>
    );
  }
}
class Numbers extends Component {

  componentWillMount(){
    // จังหวะที่ตัว DOM ที่กำลังจะ render react จะเข้ามาทำงาน function นี้ก่อน
    console.log('componentWillMount');
  }
  componentDidMount(){
    //  render() เสร็จ ตอนนี้ DOM นั้นก็จะแปะอยู่ในเว็บอย่างสมบูรณ์แล้ว เราสามารถแตะต้อง DOM ที่เราเขียนได้แล้ว
    console.log('componentDidMount');
  }
  componentWillReceiveProps(newProps){
    // เป็นจังหวะที่เปลี่ยน props ผ่าน setProps() หรือ จังหวะที่ Component จะได้รับ props อันใหม่
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(newProps, nextState){
    // ไม่เกิดการเซ็ต props ใหม่ แต่เกิดการเซ็ต state แทน ผ่าน setState() // หาก props เปลี่ยนหรือ state เปลี่ยน 
    console.log('shouldComponentUpdate');
    // ถ้า return true จะไปเรียก componentWillUpdate()ต่อ
    return true;
  }
  componentWillUpdate(newProps, nextState){
    // หาก Virtual DOM ตัดสินใจจะอัพเดต view 
    console.log('componentWillUpdate');
  }
  componentDidUpdate(newProps, nextState){
    // ทำงานหลังจาก render()
    // เพื่อบอกว่าการอัพเดต component เสร็จแล้ว
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    // หาก component นี้เกิดต้องจากลา  จะทำการ unmount DOM นี้ออกจาก DOM หลักออกไป  แล้วก็ตายจากไป
    console.log('componentWillUmmont');
  }
  render() {
    return (
      <div >
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}
export default App;
