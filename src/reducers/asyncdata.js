const asyncDataReducer = (actionName) => (state = {status: 'unloaded', body: {}}, action) => {
  switch (action.type) {
      case actionName:
          return {status: 'loading', body: state.body};
      case actionName + '_FAILURE':
          return {status: 'failure'};
      case actionName + '_SUCCESS':
          return action.responseObject;
      case actionName + '_CLEAR':
          return {status: 'unloaded', body: {}};
    default:
      return state;
  }
}

export default asyncDataReducer;