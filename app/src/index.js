import React from 'react';
import ReactDOM from 'react-dom'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import HomeComponent from '../components/home/homeComponent'
import GoodslistComponent from "../components/goodList/goodsListComponent"
import LoginComponent from "../components/login/loginComponent"
import RegComponent from "../components/reg/regComponent"
export default (
    <div>
        <Route path="/" component={HomeComponent}>
        </Route>
        <Route path="/goodslist" component={GoodslistComponent}>
        </Route>
        <Route path="/login" component={LoginComponent}>
        </Route>
        <Route path="/reg" component={RegComponent}>
        </Route>
    </div>
)