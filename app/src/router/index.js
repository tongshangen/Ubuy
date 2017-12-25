import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
import MyPage from '../components/myPage/myPageComponent'
import ViewHistoryComponent from '../components/viewhistory/viewhistoryComponent'

import collect from '../components/collect/collectComponent'
import HelpCenter from '../components/helpCenter/helpCenterComponent';
import FeedBack from '../components/feedBack/feedBackComponent'
import goodslistComponent from "../components/goodList/goodsListComponent"
import LoginComponent from '../components/login/loginComponent'
import RegComponent from '../components/reg/regComponent'
import OrderComponent from '../components/order/orderComponent'
import SpinnerComponent from '../components/spinner/SpinnerComponent'
export default (
        <div>
            <Route path="/" component={homeComponent}>
            </Route>
            <Route path="/mypage" component={MyPage}></Route>
            <Route path="/collect" component={collect}></Route>
            <Route path="viewhistory" component={ViewHistoryComponent}></Route>
            <Route path="/helpcenter" component={HelpCenter}></Route>
            <Route path="/feedfack" component={FeedBack}></Route>
            <Route path="/goodslist" component={goodslistComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <Route path="/reg" component={RegComponent}></Route>
            <Route path="/order" component={OrderComponent}></Route>
            <Route path="/spinner" component={SpinnerComponent}></Route>                   
        </div>
)