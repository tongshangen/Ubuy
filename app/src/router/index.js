import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import MyPage from '../components/myPage/myPageComponent'
import ViewHistoryComponent from '../components/viewhistory/viewhistoryComponent'

import collect from '../components/collect/collectComponent'
import HelpCenter from '../components/helpCenter/helpCenterComponent';
import FeedBack from '../components/feedBack/feedBackComponent'
import goodslistComponent from "../components/goodList/goodsListComponent"
import HelpItem from "../components/helpCenter/helpitem"
import Server from "../components/service/ServiceComponent"
import Chat from "../components/service/chat"
export default (
        <div>
            <Route path="/" component={homeComponent}>
            </Route>
            <Route path="/mypage" component={MyPage}></Route>
            <Route path="/collect" component={collect}></Route>
            <Route path="/viewhistory" component={ViewHistoryComponent}></Route>
            <Route path="/helpcenter" component={HelpCenter}>
            </Route>
            <Route path="/helpitem" component={HelpItem}></Route>
            <Route path="/feedfack" component={FeedBack}></Route>
            <Route path="goodslist" component={goodslistComponent}>
            </Route>
            <Route path="server" component={Server}>
            </Route>
            <Route path="chat" component={Chat}>
            </Route>
        </div>
)