import React, { Component } from 'react';
// step 40 : connect 
import { connect } from 'react-redux';
// step 41 : bind action 
import { bindActionCreators } from 'redux';
// step 42 : actino getdetail
import getDetail from '../actions';

class Car extends Component {
    render(){
        return(
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}
// step 43 : mapstatetoprops 
function mapStateToProps(state){
    return{
        cars: state.carDetail
    };
}
// step 44 : mapdispathtoprops
function mapDispathToProps(dispath){
    return bindActionCreators({getDetail}, dispath);
}
// strp 45 : connect reducer
export default connect(mapStateToProps,mapDispathToProps)(Car);