import {createStore, applyMiddleware} from 'redux';
import homeReducer from '../components/home/homeReducer';
import rootReducer from './rootReducer';
import loginReducer from '../components/login/loginReducer';
import regReducer from '../components/reg/regReducer'
import {ajaxMiddleware} from './ajaxMiddleware'

export default function configStore(){
    let middleware = applyMiddleware(ajaxMiddleware)
    const store = createStore(rootReducer, middleware);
    return store;
}