import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './myPage.scss'
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
// import '../../libs/base/style.css'
// import '../../libs/base/rem'

import NotLogin from './notLoginComponent';
import AlreadyLogged from './alreadyLoggedComponent';

class MyPage extends React.Component{
   render() {
        return (
            <div id="myPage_cts">
                <div className="myPageTop">
                    <AlreadyLogged/>
                    <div className="main_cts">
                        <div className="myorder"><span>我的订单</span><Icon type="right" /></div>
                        <div className="msg">
                            <div className="Payment"><Icon type="layout"/><span>待付款</span></div>
                            <div className="Payment"><Icon type="layout"/><span>查看物流</span></div>
                            <div className="Payment"><Icon type="layout"/><span>待评价</span></div>
                        </div>
                        <div className="wallet">
                            <div>
                                <h3>我的钱包</h3>
                                <ul>
                                    <li><i>0</i><span>礼品卡</span></li>
                                    <li><i>0</i><span>优惠券</span></li>
                                    <li><i>0</i><span>积分</span></li>
                                    <li><i>0</i><span>分享购</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="manage_shoe">
                            <span>我的鞋管家</span><Icon type="right" />
                        </div>
                        <div className="fun">
                            <ul>
                                <li><Link to="/collect"><Icon type="layout"/><span>我的收藏</span></Link></li>
                                <li><Link to="/viewhistory"><Icon type="layout"/><span>浏览记录</span></Link></li>
                                <li><Link to="/helpcenter"><Icon type="layout"/><span>帮助中心</span></Link></li>
                                <li><Link to="/feedfack"><Icon type="layout"/><span>意见反馈</span></Link></li>
                                <li><Icon type="layout"/><span>会员中心</span></li>
                                <li><Icon type="layout"/><span>积分商城</span></li>
                                <li><Icon type="layout"/><span>每日签到</span></li>
                                <li><Icon type="layout"/><span>联系客服</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer_cts">hahaha</div>
            </div>
        )
   }
}

export default MyPage