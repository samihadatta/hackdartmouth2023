import { ActionTypes } from '../actions';

// initial state
const initialState = {
  allSubmissions: null,
};

// reducer
const SubmissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_SUBMISSION:
      return { ...state, allSubmissions: action.payload };
    case ActionTypes.SET_SUBMISSION_TAG:
      return { ...state, submissionsByTag: action.payload };
    default:
      return state;
  }
};

export default SubmissionsReducer;