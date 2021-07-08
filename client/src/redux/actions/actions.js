import {
  GetCode,
  AddSingleCode,
  FilterLanguage,
  FilterSearch,
  RemoveCode,
  TotalAmount,
  TotalproductToBuy,
  Login,
  Logout,
} from "./actionConstant";

// getSingleProductsAPI

import { getCodeApi } from "../../api/getCodeApi";

// actions
export const getCodes = () => async (dispatch) => {
  const result = await getCodeApi();
  console.log('called', result)
  dispatch({
    type: GetCode,
    payload: result,
  });
};

// export const getSingleProduct = (id) => async (dispatch) => {
//   const result = await getSingleProductsAPI(id);
//   dispatch({
//     type: GetSingleProducts,
//     payload: result,
//   });
// };

export const filterLanguage = (lang) => {
  //console.log('from action', lang)
  return {
    type: FilterLanguage,
    payload: lang,
  };
};

// export const cartProduct = () => {
//   return {
//     type: CartProduct,
//   };
// };

// export const totalAmount = () => {
//   return {
//     type: TotalAmount,
//   };
// };

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
