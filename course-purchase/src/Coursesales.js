import React, { Component } from 'react';

class Coursesales extends Component {
    constructor(props){
        super(props);
        this.state = {
            total : 0
        };
        this.sumPrice = this.sumPrice.bind(this);
    }

    sumPrice(price){
        this.setState({
            total : this.state.total + price
        });
    }

    render(){
        // console.log(this.props);
        var courses = this.props.item.map((item, index)=>{
            return <Course name={item.name} price={item.price} key={index} sumPrice={this.sumPrice} actice={item.active} />;
        }); 
        return(
            <div>
                <h1>You can buy course : </h1>
                <div id="courses">
                    {courses}
                    <p id="total" >Total :  <b>{this.state.total}</b></p>
                </div>
            </div>
        )
    };
}

class Course extends Component {
    constructor(props){
        super(props);

        this.state = {
            active : false
        };

        this.clicker = this.clicker.bind(this);
    }

    clicker(){
        var active = !this.state.active;
        this.setState({active: active});
        this.props.sumPrice(active ? this.props.price : -this.props.price);
    }
    
    render(){
        var {name, price} = this.props;
        return(
            <div>
                <p className={this.state.acrive ? 'active' : ''} onClick={this.clicker}>{name} <b>{price}</b></p>
            </div>
        )
    };
} 

export default Coursesales;