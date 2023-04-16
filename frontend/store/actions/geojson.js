import * as geojsonService from '../../services/geojson';

export const ActionTypes = {
  SET_GEOJSON: 'SET_GEOJSON',
  API_ERROR: 'API_ERROR',
};

export const getGeoJSON = () => {
  return async (dispatch) => {
    try {
      const requests = await geojsonService.getGeoJSON();
      dispatch({ type: ActionTypes.SET_GEOJSON, payload: requests });
    } catch (error) {
      console.log(error);
      dispatch({ type: ActionTypes.API_ERROR, payload: error });
    }
  };
};