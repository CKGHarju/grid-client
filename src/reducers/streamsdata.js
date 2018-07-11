const streamsdata = (state = [], action) => {
  switch(action.type) {
    case 'SAVE_STREAMS':
      return state.concat(action.streamsdata);
    default:
      return state;
  }
}

export default streamsdata;