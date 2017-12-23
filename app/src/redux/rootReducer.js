import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import car from '../components/car_wy/carReducer'
import classify from '../components/classify_wy/classifyReducer'
import goodslist from '../components/goodList/goodsListReducer'
import collect from '../components/collect/collectReducer'
import feedBackReducer from '../components/feedBack/feedBackReducer'
import helpReducer from '../components/helpCenter/helpReducer'

export default combineReducers({
    home,
    collect,
    feedBackReducer,
    helpReducer,
    car,
    classify,
    goodslist,
    home
})


    
