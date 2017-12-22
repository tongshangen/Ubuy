import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import carComponent from '../components/car_wy/carComponent'
import classifyComponent from '../components/classify_wy/classifyComponent'

import MyPage from '../components/myPage/myPageComponent'
import ViewHistoryComponent from '../components/viewhistory/viewhistoryComponent'

import collect from '../components/collect/collectComponent'
import HelpCenter from '../components/helpCenter/helpCenterComponent';
import FeedBack from '../components/feedBack/feedBackComponent'
import goodslistComponent from "../components/goodList/goodsListComponent"

export default (
        <div>
            <Route path="/" component={homeComponent}>                
            </Route>
            <Route path="/car" component={carComponent}/>
            <Route path="/classify" component={classifyComponent}/>
            <Route path="/mypage" component={MyPage}></Route>
            <Route path="/collect" component={collect}></Route>
            <Route path="viewhistory" component={ViewHistoryComponent}></Route>
            <Route path="/helpcenter" component={HelpCenter}></Route>
            <Route path="/feedfack" component={FeedBack}></Route>
            <Route path="goodslist" component={goodslistComponent}>
            </Route>
        </div>
)