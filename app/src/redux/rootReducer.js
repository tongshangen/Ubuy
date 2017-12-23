import {combineReducers} from 'redux';
import home from '../components/home/homeReducer'
import goodslist from '../components/goodList/goodsListReducer'
import collect from '../components/collect/collectReducer'
import feedBackReducer from '../components/feedBack/feedBackReducer'
import helpReducer from '../components/helpCenter/helpReducer'

export default combineReducers({
    home,
    collect,
    feedBackReducer,
    helpReducer,
}) 