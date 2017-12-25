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
import HelpItem from "../components/helpCenter/helpitem"
import Server from "../components/service/ServiceComponent"
import Chat from "../components/service/chat"

import detailComponent from "../components/detail/detailComponent"

export default (
        <div>
            <Route path="/" component={homeComponent}>                
            </Route>
            <Route path="/car" component={carComponent}/>
            <Route path="/classify" component={classifyComponent}/>
            <Route path="/mypage" component={MyPage}></Route>
            <Route path="/collect" component={collect}></Route>
            <Route path="/viewhistory" component={ViewHistoryComponent}></Route>
            <Route path="/helpcenter" component={HelpCenter}>
            </Route>
            <Route path="/helpitem" component={HelpItem}></Route>
            <Route path="/feedfack" component={FeedBack}></Route>
            <Route path="/goodslist/:brandname" component={goodslistComponent}>
            </Route>
            <Route path="server" component={Server}>
            </Route>
            <Route path="chat" component={Chat}/>
            <Route path="detail" component={detailComponent}>
            </Route>
        </div>
)