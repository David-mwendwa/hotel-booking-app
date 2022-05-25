import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  CLEAR_ERRORS,
} from '../types/auth';

let initialState = { user: {}, isAuthenticated: false };
if (localStorage.getItem('auth')) {
  const { user, ok: isAuthenticated } = JSON.parse(
    localStorage.getItem('auth')
  );
  initialState = { user, isAuthenticated };
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_USER_SUCCESS:
      localStorage.setItem('auth', JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        isAuthenticated: action.payload.ok,
        user: action.payload.user,
      };
    case REGISTER_USER_FAIL:
    case LOGIN_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
