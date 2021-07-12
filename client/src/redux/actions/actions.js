import {
  GetCode,
  AddSingleCode,
  FilterLanguage,
  FilterSearch,
  RemoveCode,
  ThemeChange,
  EditCode,
  GOOGLE_LOGIN_REQUEST,
  LOGIN_FAILURE,
  VERIFY_LOCAL_STORAGE,
  LOGOUT_SUCCESS
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
    payload:data,
  };
};

export const removeCode = (id) => async (dispatch) => {
  console.log(id)
  await deleteCodeApi(id);
  dispatch({
    type:  RemoveCode,
    payload: id,
  });
};

// for Authentication

export const googleUserLogin = (data) => {
  console.log('user data from google', data)
  return {
    type: GOOGLE_LOGIN_REQUEST,
    payload: data,
  };
};

export const loginFailure = (message) => {
  return {
    type: LOGIN_FAILURE,
    paylaod:message,
  };
};

export const verifyStorage = () => {
  return {
    type: VERIFY_LOCAL_STORAGE,
  };
};

export const logOut = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};