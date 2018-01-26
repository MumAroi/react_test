import React, { Component } from 'react';
// step 40 : connect 
import { connect } from 'react-redux';
// step 41 : bind action 
import { bindActionCreators } from 'redux';
// step 42 : actino getdetail
import { getDetail, clearDetail } from '../actions';

class Car extends Component {

    // step 49 : componentdidmount call action
    componentWillMount(){
        this.props.getDetail(this.props.match.params.id);
    }

    // step 52 : clear detail
    componentWillUnmount(){
        this.props.clearDetail();
    }

    // step 50 : create func renderDerail for car
    renderDetail = ({detail}) => {
        if(detail){
            return detail.map((item)=>{
                return(
                    <div key={item.id} className="car-detail">
                        <img src={`/images/${item.image}`} alt={item.image}/>
                        <div className="content" >
                            <h2>{item.model}</h2>
                            <h4>{item.brand}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>
                );
            });
        }
    } 

    render(){
        return(
            <div>
                {this.renderDetail(this.props.cars)}
            </div>
        );
    }
}
// step 43 : mapstatetoprops 
function mapStateToProps(state){
    // console.log(state);
    return{
        cars: state.cars
    };
}
// step 44 : mapdispathtoprops
function mapDispathToProps(dispath){
    return bindActionCreators({getDetail, clearDetail}, dispath);
}
// strp 45 : connect reducer
export default connect(mapStateToProps,mapDispathToProps)(Car);