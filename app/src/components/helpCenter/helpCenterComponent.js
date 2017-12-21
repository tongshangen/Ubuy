import React from 'react';
import { Icon} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './helpCenter.scss'

export default class HelpCenter extends React.Component{
    render(){
        return(
            <div id="helpCenter_cts">
                <div className="header">
                    <h3><Link to="/mypage"><Icon type="left" /></Link>帮助中心</h3>
                </div>
                <div className="footer_cts">
                    <ul>
                        <li><span>优购会员注册协议</span><Icon type="right" /></li>
                        <li><span>优购会员PLUS用户协议</span><Icon type="right" /></li>
                        <li><span>购物流程</span><Icon type="right" /></li>
                        <li><span>售后服务</span><Icon type="right" /></li>
                        <li><span>常见问题</span><Icon type="right" /></li>
                        <li><span>优惠券使用说明</span><Icon type="right" /></li>
                        <li><span>礼品卡使用说明</span><Icon type="right" /></li>
                        <li><span>积分说明</span><Icon type="right" /></li>
                        <li><span>关于商品卡使用说明</span><Icon type="right" /></li>
                        <li><span>积分说明</span><Icon type="right" /></li>
                        <li><span>关于商品价格说明</span><Icon type="right" /></li>
                        <li><span>十天补差价</span><Icon type="right" /></li>
                        <li><span>防诈骗须知</span><Icon type="right" /></li>
                    </ul>
                </div>
            </div>
        )
    }
}