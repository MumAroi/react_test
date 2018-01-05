// step 7 : import redux
import { combineReducers } from 'redux';
// step 8 : import movie_reducers
import movies from './movie_reducers';
// step 9 : combineReducers
const rootReducers = combineReducers({
    movies
});

export default rootReducers;