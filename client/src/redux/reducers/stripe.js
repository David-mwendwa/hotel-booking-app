import {
  CREATE_CONNECT_ACCOUNT_REQUEST,
  CREATE_CONNECT_ACCOUNT_SUCCESS,
  CREATE_CONNECT_ACCOUNT_FAIL,
  GET_ACCOUNT_STATUS_REQUEST,
  GET_ACCOUNT_STATUS_SUCCESS,
  GET_ACCOUNT_STATUS_FAIL,
  CLEAR_ERRORS,
} from '../types/stripe';

let initialState = {};
export const stripeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONNECT_ACCOUNT_REQUEST:
    case GET_ACCOUNT_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CONNECT_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        isCreated: action.payload.ok,
        link: action.payload.link,
      };
    case GET_ACCOUNT_STATUS_SUCCESS:
      return {
        loading: false,
        status: action.payload,
      };
    case CREATE_CONNECT_ACCOUNT_FAIL:
    case GET_ACCOUNT_STATUS_FAIL:
      return {
        loading: false,
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
