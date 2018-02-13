import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews} from '../action';
import { bindActionCreators } from 'redux';

class News extends Component {
    render(){
        return(
            <div>
                News
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        articles: state.articles
    }
}

function mapDispatchToPropsI(dispatch){
    return bindActionCreators({selectedNews, clearSelectedNews}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPropsI)(News);