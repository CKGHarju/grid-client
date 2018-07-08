const chatdata = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_CHAT':
      return state.concat(action.chatdata);
    default:
      return state;
  }
}

export default chatdata;