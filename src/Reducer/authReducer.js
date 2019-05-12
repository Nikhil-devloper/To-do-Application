const INITIAL_STATE = {
  isSignedIn: null,
  id: 0,
  name: ""
}

export default (state=INITIAL_STATE,action) => {

  switch(action.type) {
    case 'SIGN_IN':
        return {...state,...{isSignedIn: true,id: action.payload.id,name: action.payload.name}}
    case 'SIGN_OUT':
        return {...state, ...{isSignedIn: false,id: 0,name: ""}}
    default:
        return state;
  }
}
