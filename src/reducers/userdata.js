const userdata = (state = {}, action) => {
  switch(action.type) {
    case 'USER_DATA':
      return action.userdata;
    default: 
      return state;
  }
}

export default userdata;