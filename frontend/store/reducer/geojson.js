import { ActionTypes } from '../actions';

// initial state
const initialState = {
  GeoJSON: null,
};

// reducer
const GeoJSONReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_GEOJSON:
      return { ...state, geoJSON: action.payload };
    default:
      return state;
  }
};

export default GeoJSONReducer;