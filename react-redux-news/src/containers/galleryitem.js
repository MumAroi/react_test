import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedGallery, clearSelectedGallery } from '../action';

class Gallery extends Component {

    componentDidMount(){
        this.props.selectedGallery(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.clearSelectedGallery();
    }

    render(){
        return(
            <div>
                132
            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log(state)
    return{
      galleries: state.galleries   
    }
}

function mapDispatchToPtops(dispatch){
    return bindActionCreators({selectedGallery, clearSelectedGallery},dispatch)
}

export default connect(mapStateToProps, mapDispatchToPtops)(Gallery);