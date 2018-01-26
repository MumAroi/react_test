import React, { Component } from 'react';
// step 33 : connect redux
import { connect } from 'react-redux';
// step 37 : link 
import { Link } from 'react-router-dom';
// step 56 : action listCars
import { listCars } from '../actions';
// step 58 : bind action
import { bindActionCreators } from 'redux';

class ListOfCars extends Component {

    // step 57 : componentdidmount call action
    componentWillMount(){
        this.props.listCars();
    }

    // step 36 : create func listOfCars
    listOfCars = ({list}) => {
        if(list){
            return list.map((item)=>{
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
               {this.listOfCars(this.props.cars)}
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
// step 55 : mapdispathtoprops
function mapDispathToProps(dispath){
    return bindActionCreators({listCars}, dispath);
}

//  step 35 : connect reducer
export default connect(mapStateToProps,mapDispathToProps)(ListOfCars);