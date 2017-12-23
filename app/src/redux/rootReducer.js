import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import car from '../components/car_wy/carReducer'
import classify from '../components/classify_wy/classifyReducer'
import goodslist from '../components/goodList/goodsListReducer'
import order from '../components/order_wy/orderReducer'

export default combineReducers({
    home,
    car,
    classify,
    goodslist,
    home,
    order
})


    