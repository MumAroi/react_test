import React, { Component } from 'react';

// step 9 : redux connect
import { connect } from 'react-redux';
// step 10 : load LatestNews
import LatestNews from '../components/home/latest';
// step 11 : load action
import { latestNews } from '../action';
// step 12 : load bineAction
import { bindActionCreators } from 'redux'; 

class Home extends Component {
    render(){
        return(
            <div>
                <LatestNews/>
            </div>
        );
    }
}

// step 13 : map state to props
function mapStateToProps(state){
    return{
        articles: state.articles
    }
}
// step 14 : dispatch reducer
function mapDispatchToProps(dispatch) {
    return bindActionCreators({latestNews}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);