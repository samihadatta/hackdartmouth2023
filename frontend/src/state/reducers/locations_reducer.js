export default function locationReducer(state = null, action = {}) {
  switch (action.type) {
    case 'VIDEO_SELECTED':
      return { selectedVideo: action.video };
    default:
      return state;
  }
}
