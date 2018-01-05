import React, { Component } from 'react';
// step 13 : import connect
import { connect } from 'react-redux';
// step 14 : import action
import * as action from '../action';

class MoviesList extends Component {
  // step 16 : create componentWillMount
  componentWillMount(){
     this.props.moviesList();
  }
  // step 18 : create func renderList
  renderList = (movies) => {
    if(movies){
      return movies.map((movie)=>{
        return(
          <div key={movie.id}>
            {movie.name}
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderList(this.props.movies)}
      </div>
    );
  }
}
// step 15 : create func mapStateToProps
function mapStateToProps(state){
  console.log(state);
  return{
    movies: state.movies
  }
}
// step 17 : export wiht connect
export default connect(mapStateToProps,action)(MoviesList);
