import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import goodslist from '../components/goodList/goodsListReducer'

export default combineReducers({
    goodslist,
    home
})