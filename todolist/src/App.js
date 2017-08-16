import React, { Component } from 'react';
import Todoinput from "./Todoinput";
import Todolist from "./Todolist";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todoitem : [],
      todoitem2 : []
    }
    this.addTodo = this.addTodo.bind(this);
    this.addTodo2 = this.addTodo2.bind(this);
  }

  addTodo(newTodo){
    this.setState({
      todoitem : this.state.todoitem.concat([newTodo])
    });
  }

  addTodo2(newTodo){
    this.setState({
      todoitem2 : this.state.todoitem2.concat([newTodo])
    });
  }

  render() {
    let {todoitem, todoitem2} = this.state;
    return (
      <div>
        <Todolist item={todoitem}/>
        <Todoinput onAddTodo={this.addTodo}/>

        <Todolist item={todoitem2}/>
        <Todoinput onAddTodo={this.addTodo2}/>
      </div>
    );
  }
}

export default App;
