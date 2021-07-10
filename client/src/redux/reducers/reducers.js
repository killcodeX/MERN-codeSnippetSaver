import {
  GetCode,
  AddSingleCode,
  FilterLanguage,
  FilterSearch,
  RemoveCode,
  ThemeChange,
  TotalproductToBuy,
} from "../actions/actionConstant";

const initialState = {
  Codes: [],
  theme: false,
  TotalProduct: [],
  buyProduct: [],
  TotalAmount: null,
  TotalProductBuy: null,
};

// Reducers
const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
      case GetCode:
        return {
          ...state,
          Codes: action.payload || [],
        };

      case AddSingleCode:
        return {
          ...state,
          Codes: [action.payload,...state.Codes],
        };

    case FilterLanguage:
      //console.log('form reducers', action)
      const filterCode = state.Codes.filter(item => item.language.toLowerCase() == action.payload.toLowerCase())
      //console.log('filter by lang', filterCode)
      return {
        ...state,
        TotalProduct: filterCode,
      };

    //   case CartProduct:
    //     const totalItemBuy = state.Products.filter((data1) =>
    //       state.buyProduct.some((data2) => data1.id === data2.id)
    //     );
    //     return {
    //       ...state,
    //       TotalProduct: totalItemBuy,
    //     };

    //   case TotalproductToBuy:
    //     const data = state.buyProduct.reduce(
    //       (acc, currentValue) => acc + currentValue.numberOfProduct,
    //       0
    //     );
    //     return {
    //       ...state,
    //       TotalProductBuy: data,
    //     };

      case ThemeChange:
        return {
          ...state,
          theme: !state.theme,
        };

    //   case RemovefromCart:
    //     return {
    //       ...state,
    //       TotalProduct: state.TotalProduct.filter(
    //         (product) => product.id !== action.payload
    //       ),
    //       buyProduct: state.buyProduct.filter(
    //         (product) => product.id !== action.payload
    //       ),
    //     };

    default:
      return state;
  }
};

export default ProductReducer;
