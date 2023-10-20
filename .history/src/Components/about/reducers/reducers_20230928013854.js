const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
      case 'REGISTER_SUCCESS':
        localStorage.setItem('token', action.payload);
        return {
          ...state,
          token: action.payload,
          isAuthenticated: true,
          error: null,
        };
      case 'LOGIN_FAIL':
      case 'REGISTER_FAIL':
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          error: action.payload,
        };
      case 'LOGOUT':
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  