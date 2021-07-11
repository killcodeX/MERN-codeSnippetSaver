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
      let allData = [...state.Codes];
      console.log(action.payload)
      if (action.payload == "All Languages") {
        console.log()
        return {
          ...state,
          Codes: allData,
        };
      } else {
        const filterCode = state.Codes.filter(
          (item) => item.language.toLowerCase() == action.payload.toLowerCase()
        );
        return {
          ...state,
          Codes: filterCode,
        };
      }

    case EditCode:
      const editedCode = state.Codes.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
      return {
        ...state,
        Codes: editedCode,
      };

    case FilterSearch:
      console.log("received search query", action.payload);
      //console.log(state.Codes)
      const result = state.Codes.filter((val) =>
        val.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      if (result.length < 1) alert("There is not title with that word !!");
      return {
        ...state,
        Codes: result,
      };

    case ThemeChange:
      return {
        ...state,
        theme: !state.theme,
      };

    case RemoveCode:
      let removeResult = state.Codes.filter(code => code._id != action.payload)
      console.log(removeResult)
      return {
        ...state,
        Codes: removeResult
      };

    default:
      return state;
  }
};

export default ProductReducer;
