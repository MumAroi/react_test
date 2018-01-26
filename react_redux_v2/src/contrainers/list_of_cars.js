import React, { Component } from 'react';
// step 33 : connect redux
import { connect } from 'react-redux';
// step 37 : link 
import { Link } from 'react-router-dom';

class ListOfCars extends Component {

    // step 36 : create func listOfCars
    listOfCars = ({cars}) => {
        if(cars){
            return cars.map((item)=>{
                return(
                    // step 38 : create link car:id and component
                    <Link key={item.id} to={`/car/${item.id}`} className="cars-item" >
                        <div className="left">
                            <img src={`/images/${item.image}`} alt={item.image}/>
                        </div>
                        <div className="right">
                            <h4>{item.model}</h4>
                            <h6>{item.brand}</h6>
                        </div>
                    </Link>
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
    // console.log(state);
    return{
        cars: state.cars
    };
}

//  step 35 : connect reducer
export default connect(mapStateToProps,null)(ListOfCars);