import React, { Component } from 'react';
// step 9 : redux connect
import { connect } from 'react-redux';

/* load component */
// step 10 : load LatestNews
import LatestNews from '../components/home/latest';
import Othernews from '../components/home/othernews';
import Gallery from '../components/home/gallery';
/* load action */
import { latestNews, otherNews, latestGallery } from '../action';
// step 12 : load bineAction
import { bindActionCreators } from 'redux'; 

class Home extends Component {

    // step 15 : run action 
    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery();
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <Othernews otherNews={this.props.articles.other}/>
                <Gallery latestGallerys={this.props.gallerys.latestGallerys}/>
            </div>
        );
    }
}

// step 13 : map state to props
function mapStateToProps(state){
    // console.log(state);
    return{
        articles: state.articles,
        gallerys: state.gallerys
    }
}
// step 14 : dispatch reducer
function mapDispatchToProps(dispatch) {
    return bindActionCreators({latestNews, otherNews, latestGallery}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);