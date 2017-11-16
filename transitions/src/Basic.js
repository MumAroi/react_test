import React, { Component } from 'react';
// step 1 : import css transition
import { CSSTransitionGroup } from 'react-transition-group';
import './App.css';

class Basic extends Component{
    constructor(props){
        super(props);

        this.state = {
            items:[99,25]
        }
    }

    addElements () {
        return this.state.items.map(function(item,i){
            return <div className="item" key={i}>{item}</div>
        });
    }

    generateNumber(){
        //let random = Math.floor(Math.random() * 100) + 1;
        let newArray = [...this.state.items,Math.floor(Math.random() * 100) + 1]

        this.setState({
            items:newArray
        })
    }

    removeNumber(){
        let newArray = this.state.items.slice(0,-1);
        this.setState({
            items:newArray
        })
    }

    render(){
        return(
            <div>
                {/* step 2 : load CSSTransitionGroup*/}
                <CSSTransitionGroup
                    // step 3 : create transition name
                    transitionName="basic"
                    // step 4 : create transitionEnter ( when create  item )
                    transitionEnter={true}
                    transitionEnterTimeout={1000}
                    // step 7 : create transitionLeave ( when remove item )
                    transitionLeave={true}
                    transitionLeaveTimeout={1000}
                    // step 10 : create transitionAppear ( when item appear )
                    transitionAppear={true}
                    transitionAppearTimeout={500}>
                {this.addElements()}
                </CSSTransitionGroup>

                <div className="btns">
                    <div className="btn-add" onClick={()=> this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
                </div>
            </div>
        )
    }
}


export default Basic;