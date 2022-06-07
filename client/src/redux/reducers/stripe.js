import {
  CREATE_CONNECT_ACCOUNT_REQUEST,
  CREATE_CONNECT_ACCOUNT_SUCCESS,
  CREATE_CONNECT_ACCOUNT_FAIL,
  CLEAR_ERRORS,
} from '../types/stripe';

let initialState = {};
export const stripeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONNECT_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_CONNECT_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        isCreated: action.payload.ok,
      };
    case CREATE_CONNECT_ACCOUNT_FAIL:
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
