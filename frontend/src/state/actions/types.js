const chatGptActions = {
  TALK_TO_CHATGPT: 'TALK_TO_CHATGPT',
};

const locationActions = {
  ADD_LOCATION: 'ADD_LOCATION',
  FETCH_LOCATIONS: 'FETCH_LOCATIONS',
};

export default {
  ...chatGptActions,
  ...locationActions,
};
