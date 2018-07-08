const userdata = (state = {}, action) => {
  switch(action.type) {
    case 'USER_DATA':
      return action.userdata;
    case 'USER_DATA_REFRESH':
      return {name: state.name, id: state.id, grids: action.grids}
    default: 
      return state;
  }
}

export default userdata;