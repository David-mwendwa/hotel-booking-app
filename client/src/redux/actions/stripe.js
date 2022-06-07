import axios from 'axios';
import {
  CREATE_CONNECT_ACCOUNT_REQUEST,
  CREATE_CONNECT_ACCOUNT_SUCCESS,
  CREATE_CONNECT_ACCOUNT_FAIL,
} from '../types/stripe';

export const createConnectAccount = (token) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CONNECT_ACCOUNT_REQUEST });
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const { data } = await axios.post(
      `/api/v1/stripe/create-connect-account`,
      {},
      config
    );
    dispatch({ type: CREATE_CONNECT_ACCOUNT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_CONNECT_ACCOUNT_FAIL,
      payload: error.response.data.msg,
    });
  }
};
