import {combineReducers} from 'redux';
import ProductReducer from './reducers';
//import AuthReducer from './authReducer';



export default combineReducers({
    Codes: ProductReducer,
    //Auth: AuthReducer
})