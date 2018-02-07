//  combineReducers
import { combineReducers } from 'redux';
// load article reducers 
import articles from './articles_reducer';
import galleries from './gallerys_reducers';

const rootReducers = combineReducers({
    articles,
    galleries
});
// export reducers after combine
export default rootReducers;