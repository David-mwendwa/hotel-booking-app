import axios from 'axios';
import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  CLEAR_ERRORS,
} from '../types/auth';

export const register = (userInput) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.post(
      `/api/v1/auth/register`,
      userInput,
      config
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.msg });
  }
};

export const login = (userInput) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.post(`/api/v1/auth/login`, userInput, config);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data.msg });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/v1/auth/logout`);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.msg });
  }
};

export const updateUserInLocalStorage = (user, next) => {
  if (window.localStorage.getItem('auth')) {
    let auth = JSON.parse(localStorage.getItem('auth'))
    auth.user = user;
    localStorage.setItem('auth', JSON.stringify(auth))
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
