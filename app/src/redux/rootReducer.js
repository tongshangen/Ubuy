import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import goodslist from '../components/goodList/goodsListReducer'
import login from '../components/login/loginReducer'
import reg from '../components/reg/regReducer'
import order from '../components/order/orderReducer'
export default combineReducers({
    home,
    reg,
    order,
    goodslist,
    login

})