import {
  GetCode,
  AddSingleCode,
  FilterLanguage,
  FilterSearch,
  RemoveCode,
  ThemeChange,
  EditCode,
  GOOGLE_LOGIN_REQUEST,
  USER_LOGIN_REQUEST,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_SUCCESS,
  VERIFY_LOCAL_STORAGE,
} from "./actionConstant";

// getSingleProductsAPI

import {
  getCodeApi,
  sendSingleCodeApi,
  editCodeApi,
  deleteCodeApi,
} from "../../api";

// actions
export const getCodes = () => async (dispatch) => {
  const result = await getCodeApi();
  //console.log('called', result)
  dispatch({
    type: GetCode,
    payload: result,
  });
};

export const addNewCode = (data) => async (dispatch) => {
  const result = await sendSingleCodeApi(data);
  //console.log('data received', data)
  dispatch({
    type: AddSingleCode,
    payload: data,
  });
};

export const editCode = (id, data) => async (dispatch) => {
  const result = await editCodeApi(id, data);
  dispatch({
    type: EditCode,
    payload: result,
  });
};

export const filterLanguage = (lang) => {
  //console.log('from action', lang)
  return {
    type: FilterLanguage,
    payload: lang,
  };
};

export const themeChange = () => {
  return {
    type: ThemeChange,
  };
};

export const filterSearch = (data) => {
  return {
    type: FilterSearch,
    payload: data,
  };
};

export const removeCode = (id) => async (dispatch) => {
  console.log(id);
  await deleteCodeApi(id);
  dispatch({
    type: RemoveCode,
    payload: id,
  });
};

// --------------------------------------------------------------------------------------------------------------

// for Authentication
export const googleUserLogin = (data) => {
  console.log("user data from google", data);
  return {
    type: GOOGLE_LOGIN_REQUEST,
    payload: data,
  };
};

// if login successfull
export const userLoginrequest = (data, history) => async (dispatch) => {
  console.log("got data", data);
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
      paylaod: data,
    });
  } catch (error) {
    loginFailure(error);
  }
};

// if loginfails
export const loginFailure = (message) => {
  return {
    type: LOGIN_FAILURE,
    paylaod: message,
  };
};


// if signup is successfull
export const userRegisterSuccess = (data, history) => async (dispatch) => {
  console.log("user register in action", data);
  try {
    dispatch({
      type: SIGNUP_SUCCESS,
      paylaod: data,
    });
  } catch (error) {
    userRegisterFail(error);
  }
};

// if signup fails
export const userRegisterFail = (message) => {
  return {
    type: SIGNUP_FAILURE,
    paylaod: message,
  };
};

// for check localstorage
export const verifyStorage = () => {
  return {
    type: VERIFY_LOCAL_STORAGE,
  };
};


// for logout
export const logOut = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
