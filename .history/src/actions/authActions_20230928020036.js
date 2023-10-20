import axios from 'axios';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_SUCCESS } from './types';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8089/api/v1/auth/signin', { email, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
  } catch (error) {
    console.error('Error logging in:', error);
  }
};

export const logout = () => (dispatch) => {
  // Add logic to make a request to log out on the server if needed
  dispatch({ type: LOGOUT_SUCCESS });
};

export const register = (firstName, lastName, email, password, role) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8089/api/v1/auth/register', { firstName, lastName, email, password, role });
    dispatch({ type: REGISTER_SUCCESS, payload: response.data.token });
  } catch (error) {
    console.error('Error registering:', error);
  }
};
