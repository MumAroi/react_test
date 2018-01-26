// step 17 : combinereducers
import { combineReducers } from 'redux';
// step 31 : cars reducer
import cars from './cars_reducer';
// step 18 : make combinereducers
const rootReducers = combineReducers({
    cars
});

export default rootReducers;