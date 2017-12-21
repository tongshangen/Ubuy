import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import homeComponent from '../components/home/homeComponent'
<<<<<<< HEAD
import MyPage from '../components/myPage/myPageComponent'
import ViewHistoryComponent from '../components/viewhistory/viewhistoryComponent'

import collect from '../components/collect/collectComponent'
import HelpCenter from '../components/helpCenter/helpCenterComponent';
import FeedBack from '../components/feedBack/feedBackComponent'
=======
import goodslistComponent from "../components/goodList/goodsListComponent"

>>>>>>> eae390d34c3fb4277306d30ff9448eff581beccf

export default (
        <div>
            <Route path="/" component={homeComponent}>
            </Route>
<<<<<<< HEAD
            <Route path="/mypage" component={MyPage}></Route>
            <Route path="/collect" component={collect}></Route>
            <Route path="viewhistory" component={ViewHistoryComponent}></Route>
            <Route path="/helpcenter" component={HelpCenter}></Route>
            <Route path="/feedfack" component={FeedBack}></Route>
=======
            <Route path="goodslist" component={goodslistComponent}>
            </Route>
>>>>>>> eae390d34c3fb4277306d30ff9448eff581beccf
        </div>
)