import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedNews, clearSelectedNews } from '../action';
import { bindActionCreators } from 'redux';

// conpomemt
import Counter from './likecounter';

class News extends Component {

    // call action selectedNews
    componentDidMount() {
        this.props.selectedNews(this.props.match.params.id);
    }

    // clear data
    componentWillUnmount() {
        this.props.clearSelectedNews();
    }

    //  news detail template
    renderNews = ({ selected }) => {
        if (selected) {
            // console.log(selected)
            return selected.map((item) => {
                return (
                    <div key={item.id}>
                        <div className="tags">
                            <span>
                                <i className="fa fa-eye" ></i>
                                {item.views}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-up" ></i>
                                {item.likes[0]}
                            </span>
                            <span>
                                <i className="fa fa-thumbs-down" ></i>
                                {item.likes[1]}
                            </span>
                        </div>
                        <div className="top">
                            <h2>{item.title}</h2>
                            <span>Article by: <strong>{item.author}</strong></span>
                        </div>
                        <img alt={item.title} src={`/images/articles/${item.img}`} />
                        <div className="body-news">
                            {item.body}
                        </div>
                        <div>
                            <Counter
                                articleId={item.id}
                                type="HANDLE_LIKES_ARTICLE"
                                section="articles"
                                likes={item.likes[0]}
                                dislikes={item.likes[1]} />
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <div className="news-container">
                {this.renderNews(this.props.articles)}
            </div>
        );
    }
}

// subscipt data 
function mapStateToProps(state) {
    // console.log(state)
    return {
        articles: state.articles
    }
}

// pass action to props
function mapDispatchToPropsI(dispatch) {
    return bindActionCreators({ selectedNews, clearSelectedNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPropsI)(News);