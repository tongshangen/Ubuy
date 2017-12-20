import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import goodslistComponent from "../components/goodList/goodsListComponent"


export default (
        <div>
            <Route path="/" component={homeComponent}>
            </Route>
            <Route path="goodslist" component={goodslistComponent}>
            </Route>
        </div>
)