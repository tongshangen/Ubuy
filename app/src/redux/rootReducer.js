import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import car from '../components/car_wy/carReducer'
import classify from '../components/classify_wy/classifyReducer'
import goodslist from '../components/goodList/goodsListReducer'
import collect from '../components/collect/collectReducer'
import feedBackReducer from '../components/feedBack/feedBackReducer'
import helpReducer from '../components/helpCenter/helpReducer'
import logisticsRequested from "../components/logistics/logisticsReducer"
import Assess from "../components/assess/assessAction"
import managerOrderRequested from "../components/manager/managerOrderReducer"

export default combineReducers({
    home,
    collect,
    feedBackReducer,
    helpReducer,
    car,
    classify,
    goodslist,
    home,
    logisticsRequested,
    managerOrderRequested,
    // Assess
})


    
