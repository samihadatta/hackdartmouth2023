import { combineReducers } from 'redux';
import submissions from './submissions';
import geoJSON from './geojson';

const rootReducer = combineReducers({
  submissions,
  geoJSON,
});

export default rootReducer;