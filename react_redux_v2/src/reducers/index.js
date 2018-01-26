// step 17 : combinereducers
import { combineReducers } from 'redux';
// step 31 : cars reducer
import cars from './cars_reducer';
// step 51 : car detail
import carDetail from './care_detail';
// step 18 : make combinereducers
const rootReducers = combineReducers({
    cars,
    carDetail
});

export default rootReducers;