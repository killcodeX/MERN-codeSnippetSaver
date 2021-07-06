import {
    GetProducts,
    GetSingleProducts,
    BuyProduct,
    CartProduct,
    RemovefromCart,
    TotalAmount,
    TotalproductToBuy,
    Login,
    Logout,
  } from "./actionConstant";
  import { getProductsAPI, getSingleProductsAPI } from "../../api";
  
  // actions
  export const getProducts = () => async (dispatch) => {
    const result = await getProductsAPI();
    dispatch({
      type: GetProducts,
      payload: result,
    });
  };
  
  export const getSingleProduct = (id) => async (dispatch) => {
    const result = await getSingleProductsAPI(id);
    dispatch({
      type: GetSingleProducts,
      payload: result,
    });
  };
  
  export const buyProduct = (data) => {
    return {
      type: BuyProduct,
      payload: data,
    };
  };
  
  export const cartProduct = () => {
    return {
      type: CartProduct,
    };
  };
  
  export const totalAmount = () => {
    return {
      type: TotalAmount,
    };
  };
  
  export const totalproductToBuy = () => {
    return {
      type: TotalproductToBuy,
    };
  };
  
  export const removefromCart = (id) => {
    return {
      type: RemovefromCart,
      payload: id,
    };
  };
  
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