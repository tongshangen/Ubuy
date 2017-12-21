import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import carComponent from '../components/car_wy/carComponent'
import classifyComponent from '../components/classify_wy/classifyComponent'


export default (
        <div>
            <Route path="/" component={homeComponent}>                
            </Route>
            <Route path="/car" component={carComponent}/>
            <Route path="/classify" component={classifyComponent}/>
        </div>
)