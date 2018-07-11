const editStateReducer = (state = {editing: true}, action) => {
  switch(action.type) {
    case 'TOGGLE_EDIT':
      if (state.editing) return {...state,editing:false};
      else return {...state,editing:true};
    default:
      return state;
  }
}

export default editStateReducer;