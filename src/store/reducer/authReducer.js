import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNOUT_SUCCESS
} from '../actions/authActions';

const initState = {
  authError : null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case LOGIN_ERROR:
      return {
        ...state, 
        authError : 'Login failed'
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError : null
      }
    case SIGNOUT_SUCCESS:
      return state;
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      }
    default :
      return state;
  }
};

export default authReducer;