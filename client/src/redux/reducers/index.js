import {combineReducers} from 'redux';
import ProductReducer from './reducers';
import AuthReducer from './authReducers';



export default combineReducers({
    Codes: ProductReducer,
    Auth: AuthReducer
})