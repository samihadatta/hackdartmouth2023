import * as submissionsService from '../../services/submissions';

export const ActionTypes = {
  SET_SUBMISSION: 'SET_SUBMISSION',
  SET_SUBMISSION_TAG: 'SET_SUBMISSION_TAG',
  API_ERROR: 'API_ERROR',
};

export const getAllSubmissions = () => {
  return async (dispatch) => {
    try {
      const requests = await submissionsService.getAllSubmissions();
      dispatch({ type: ActionTypes.SET_SUBMISSION, payload: requests });
    } catch (error) {
      console.log(error);
      dispatch({ type: ActionTypes.API_ERROR, payload: error });
    }
  };
};

export const getSubmissionsByTag = (tag) => {
    return async (dispatch) => {
      try {
        const requests = await submissionsService.getSubmissionsByTag(tag);
        dispatch({ type: ActionTypes.SET_SUBMISSION_TAG, payload: requests });
      } catch (error) {
        console.log(error);
        dispatch({ type: ActionTypes.API_ERROR, payload: error });
      }
    };
};

