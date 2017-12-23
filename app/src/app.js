import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configStore_wy from './redux/configStore_wy';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import router from './router/index';
import $ from 'jquery';

const store_wy = configStore_wy();

ReactDOM.render(
    <Provider store={store_wy}>
        <Router history={hashHistory} routes={router}/>
    </Provider>,
    document.getElementById('app')
)
