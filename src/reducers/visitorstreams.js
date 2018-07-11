const visitorstreams = (state = [], action) => {
  switch(action.type) {
    case 'VISITOR_STREAMS':
      return state.concat(action.visitorstreams);
    default: 
      return state;
  }
}

export default visitorstreams;