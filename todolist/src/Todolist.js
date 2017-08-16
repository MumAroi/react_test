import React, { Component } from "react";
import Todoitem from "./Todoitem";

class Todolist extends Component {
    render() {
        let {item} = this.props;
        return(
            <div>
                <ul>
                    {item.map((todo, index) =>  <li key={index} ><Todoitem text={todo}/></li>)}
                </ul>
            </div>
        );
    }
}

export default Todolist;