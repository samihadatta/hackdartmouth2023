import axios from 'axios';
import ActionTypes from './types';

const ROOT_URL = 'http://localhost:9090';

// eslint-disable-next-line import/prefer-default-export
export function askChatGPT(request) {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${ROOT_URL}/chatGPT`, { request });
      console.log(response);
      dispatch({ type: ActionTypes.TALK_TO_CHATGPT, payload: response.data });
    } catch (error) {
      console.log('failed :(');
    }
  };
}
