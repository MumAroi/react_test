import React, { Component } from "react";

class  Todoinput extends  Component {

    constructor(props){
        super(props);
        this.state = {
            newTodo : ""
        }
        this.addClicked = this.addClicked.bind(this);
    }
    addClicked(){
        let {onAddTodo} = this.props;
        onAddTodo(this.state.newTodo);
        this.setState({
            newTodo: ""
        });
    }

    render() {
        let {newTodo} = this.state;
        return(
             <div>
                Add to do
                <input  value={newTodo} onChange={ (e)=>{ this.setState({newTodo:e.target.value}) } }/> {/* setState แบบสั่น*/}
                <button onClick={this.addClicked}>Add to do item</button>
             </div>
        );
    }
}
export default Todoinput;