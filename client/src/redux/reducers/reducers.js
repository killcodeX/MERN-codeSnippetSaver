import {
  GetCode,
  AddSingleCode,
  FilterLanguage,
  FilterSearch,
  RemoveCode,
  ThemeChange,
  EditCode,
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
        Codes: [action.payload, ...state.Codes],
      };

    case FilterLanguage:
      //console.log('form reducers', action)
      const filterCode = state.Codes.filter(
        (item) => item.language.toLowerCase() == action.payload.toLowerCase()
      );
      return {
        ...state,
        Codes: filterCode,
      };

    case EditCode:
      const editedCode = state.Codes.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        ...state,
        Codes: editedCode,
      };

    case FilterSearch:
      const result = state.codes.filter((val) =>
        val.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      console.log(result);
      // return {
      //   ...state,
      //   TotalProductBuy: data,
      // };

    case ThemeChange:
      return {
        ...state,
        theme: !state.theme,
      };

    case RemoveCode:
      return {
        ...state,
        Codes: state.Codes.filter((code) => code.id !== action.payload),
      };

    default:
      return state;
  }
};

export default ProductReducer;
