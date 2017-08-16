import React, { Component } from "react";

class Todoitem extends Component {

    constructor(props){
        super(props)
        this.state = {
            done: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            done: !this.state.done
        });
    }

    render(){
        let {text} = this.props;
        return(
            <div>
                <input type="checkbox" value={this.state.done} onClick={this.toggle}/>
                {(this.state.done) ? "DONE: "+text : text}
            </div>
        );
    }
}

export default Todoitem;