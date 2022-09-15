import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import ProductReducer from "./ProductReducer"


const rootReducer = combineReducers({authReducer,errorReducer,ProductReducer})

export default rootReducer

