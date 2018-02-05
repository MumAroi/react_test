//  combineReducers
import { combineReducers } from 'redux';
// load article reducers 
import articles from './article_reducer'

const rootReducers = combineReducers({
    articles
});
// export reducers after combine
export default rootReducers;