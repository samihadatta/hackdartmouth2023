import {
    ActionTypes as submissionsActionTypes,
    getAllSubmissions,
    getSubmissionsByTag,
} from './submissions';
import {
    ActionTypes as geojsonActionTypes,
    getGeoJSON,
} from './geojson';
const ActionTypes = {
    ...submissionsActionTypes,
    ...geojsonActionTypes,
};
export {
    ActionTypes,
    getAllSubmissions,
    getSubmissionsByTag,
    getGeoJSON,
};