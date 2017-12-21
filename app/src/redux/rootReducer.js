import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import goodslist from '../components/goodList/goodsListReducer'
import login from '../components/login/loginReducer'
import reg from '../components/reg/regReducer'

export default combineReducers({
    goodslist,
    home,
    login,
    reg
})