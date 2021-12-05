import { combineReducers } from 'redux';
import {marketReducer} from '../market/marketReducer'
import tabReducer from './tabReducer';

export default combineReducers({
    tabReducer,
    marketReducer
})
