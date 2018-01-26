import React, { Component } from 'react';
// step 33 : connect redux
import { connect } from 'react-redux';

class ListOfCars extends Component {

    // step 36 : create func listOfCars
    listOfCars = ({cars}) => {
        if(cars){
            return cars.map((item)=>{
                return(
                    <div className="cars-item" >
                        {item.model}
                    </div>
                );
            })
        }
    }

    render(){
        return(
            <div>
               {this.listOfCars(this.props)}
            </div>
        );
    }
}

// step 34 : map state to props
function mapStateToProps(state){
    console.log(state);
    return{
        cars: state.cars
    };
}

//  step 35 : connect reducer
export default connect(mapStateToProps,null)(ListOfCars);