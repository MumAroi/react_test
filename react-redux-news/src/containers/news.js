import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews} from '../action';
import { bindActionCreators } from 'redux';

class News extends Component {

    // call action selectedNews
    componentDidMount(){
        this.props.selectedNews(this.props.match.params.id);
    }

    // clear data
    componentWillUnmount(){
        this.props.clearSelectedNews();
    }

    render(){
        return(
            <div>
                News
            </div>
        );
    }
}

// subscipt data 
function mapStateToProps(state){
    console.log(state)
    return{
        articles: state.articles
    }
}

// pass action to props
function mapDispatchToPropsI(dispatch){
    return bindActionCreators({selectedNews, clearSelectedNews}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPropsI)(News);