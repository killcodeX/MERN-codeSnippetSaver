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
};

// Reducers
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN_REQUEST:
        console.log(' from reducer',action.payload.result)
      saveState("googleLoggedIn", true);
      saveState("googleUser", action.payload.result);
      return {
        ...state,
        isAuthenticated: true,
        loginError: false,
        googleUser: action.payload.result,
        googleToken: action.payload.token,
      };
    // case LOGIN_SUCCESS:
    //   saveState("firebaseLoggedIn", true);
    //   saveState("firebaseUser", action.user);
    //   return {
    //     ...state,
    //     isLoggingIn: false,
    //     isAuthenticated: true,
    //     user: action.user,
    //   };
    case LOGIN_FAILURE:
      alert(action.message);
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
        errorMessage: action.message,
      };

    // case SIGNUP_REQUEST:
    //   return {
    //     ...state,
    //     isSignUp: true,
    //     SignUpError: false,
    //   };
    case SIGNUP_SUCCESS:
      saveState("firebaseLoggedIn", true);
      saveState("firebaseUser", action.user);
      return {
        ...state,
        isSignUp: false,
        isAuthenticated: true,
        user: action.user,
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
    // case LOGOUT_REQUEST:
    //   return {
    //     ...state,
    //     isLoggingOut: true,
    //     loginError: false,
    //   };
    case LOGOUT_SUCCESS:
      saveState("googleLoggedIn", false);
      saveState("googleUser", {});
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        googleUser: {},
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
      const auth = loadState("googleLoggedIn");
      const googleUser = loadState("googleUser");
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: auth,
        loginError: true,
        googleUser: googleUser,
      };

    default:
      return state;
  }
};

export default AuthReducer;
