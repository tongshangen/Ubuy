import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import car from '../components/car_wy/carReducer'
import classify from '../components/classify_wy/classifyReducer'
import goodslist from '../components/goodList/goodsListReducer'
import detail from '../components/detail/detailReducer'
export default combineReducers({
    home,
    car,
    classify,
    goodslist,
    home,
    detail
})


    