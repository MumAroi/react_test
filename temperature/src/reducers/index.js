import { combineReducers } from 'redux';
import weather from './weather.reducer';

const rootReducers = combineReducers({
    weather
});

export default rootReducers;