// import {
//     GetProducts,
//     GetSingleProducts,
//     BuyProduct,
//     CartProduct,
//     RemovefromCart,
//     TotalAmount,
//     TotalproductToBuy,
//   } from "../actions/actionConstant";
  
  const initialState = {
    Products: [],
    Product: false,
    TotalProduct: [],
    buyProduct: [],
    TotalAmount: null,
    TotalProductBuy: null,
  };
  
  // Reducers
  const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
    //   case GetProducts:
    //     return {
    //       ...state,
    //       Products: action.payload,
    //     };
  
    //   case GetSingleProducts:
    //     return {
    //       ...state,
    //       Product: action.payload,
    //     };
  
    //   case BuyProduct:
    //     return {
    //       ...state,
    //       buyProduct: [action.payload, ...state.buyProduct],
    //     };
  
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
  
    //   case TotalAmount:
    //     const total = [];
    //     state.TotalProduct.map(product => {
    //       state.buyProduct.map(item => {
    //         if(item.id === product.id){
    //           total.push(product.price * item.numberOfProduct)
    //         }
    //       })
    //     })
    //     const newTotal = total.reduce((acc, curr) => acc+curr,0)
    //     return {
    //       ...state,
    //       TotalAmount: newTotal,
    //     };
  
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