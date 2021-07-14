import {
  GOOGLE_LOGIN_REQUEST,
  USER_LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFY_LOCAL_STORAGE,
} from "../actions/actionConstant";

import { saveState, loadState } from "../../helpers/localStorage";

const initialState = {
  loginError: false,
  SignUpError: false,
  logoutError: false,
  isAuthenticated: false,
  errorMessage: "",
  googleUser: {},
  googleToken: "",
  user: {},
  userToken: "",
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN_REQUEST:
      saveState("googleLoggedIn", true);
      saveState("googleUser", action.payload.result);
      return {
        ...state,
        isAuthenticated: true,
        loginError: false,
        googleUser: action.payload.result,
        googleToken: action.payload.token,
      };
    case USER_LOGIN_REQUEST:
      console.log("from reducers login request -->", action);
      saveState("userLoggedIn", true);
      saveState("backUser", action.payload.result);
      saveState('userToken', action.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        loginError: false,
        user: action.payload.result,
        userToken: action.payload.token,
      };
    case LOGIN_FAILURE:
      alert(action.message);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        errorMessage: action.message,
      };
    case SIGNUP_SUCCESS:
      saveState("userLoggedIn", true);
      saveState("backUser", action.payload.result);
      saveState('userToken', action.payload.token)
      return {
        ...state,
        isAuthenticated: true,
        SignUpError: false,
        user: action.payload.result,
        userToken: action.payload.token,
      };
    case SIGNUP_FAILURE:
      alert(action.message);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        SignUpError: true,
        errorMessage: action.message,
      };
    case LOGOUT_SUCCESS:
      saveState("googleLoggedIn", false);
      saveState("googleUser", {});
      saveState("userLoggedIn", false);
      saveState("backUser", {});
      saveState('userToken','')
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        googleUser: {},
        googleToken: "",
        user:{},
        userToken:''
      };
    case LOGOUT_FAILURE:
      alert(action.message);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        errorMessage: action.message,
      };

    case VERIFY_LOCAL_STORAGE:
      const googleAuth = loadState("googleLoggedIn");
      const googleUser = loadState("googleUser");
      const userAuth = loadState("userLoggedIn");
      const backUser = loadState("backUser");
      const useToken = loadState('userToken')
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: googleAuth || userAuth,
        loginError: true,
        googleUser: googleUser,
        user: backUser,
        userToken:useToken
      };

    default:
      return state;
  }
};

export default AuthReducer;
