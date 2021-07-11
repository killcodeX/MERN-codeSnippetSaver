import {
  GetCode,
  AddSingleCode,
  FilterLanguage,
  FilterSearch,
  RemoveCode,
  ThemeChange,
  EditCode,
  Login,
  Logout,
} from "./actionConstant";

// getSingleProductsAPI

import { getCodeApi, sendSingleCodeApi, editCodeApi } from "../../api";

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

// export const totalproductToBuy = () => {
//   return {
//     type: TotalproductToBuy,
//   };
// };

// export const removefromCart = (id) => {
//   return {
//     type: RemovefromCart,
//     payload: id,
//   };
// };

// for Authentication

export const userLogin = (data) => {
  return {
    type: Login,
    payload: data,
  };
};

export const userLogout = () => {
  return {
    type: Logout,
  };
};
