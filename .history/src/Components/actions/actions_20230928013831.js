import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/v1/auth/signin', { email, password });
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data.token,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN_FAIL',
      payload: error.response.data,
    });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/v1/auth/register', formData);
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data.token,
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload: error.response.data,
    });
  }
};

export const logout = () => (dispatch) => {
  // You can send a request to your server to invalidate the token if needed
  dispatch({
    type: 'LOGOUT',
  });
};
