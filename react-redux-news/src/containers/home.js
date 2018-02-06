import React, { Component } from 'react';
// step 9 : redux connect
import { connect } from 'react-redux';

/* load component */
// step 10 : load LatestNews
import LatestNews from '../components/home/latest';
import Othernews from '../components/home/othernews';
/* load action */
import { latestNews, otherNews } from '../action';
// step 12 : load bineAction
import { bindActionCreators } from 'redux'; 

class Home extends Component {

    // step 15 : run action 
    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <Othernews otherNews={this.props.articles.other}/>
            </div>
        );
    }
}

// step 13 : map state to props
function mapStateToProps(state){
    // console.log(state);
    return{
        articles: state.articles
    }
}
// step 14 : dispatch reducer
function mapDispatchToProps(dispatch) {
    return bindActionCreators({latestNews, otherNews}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);