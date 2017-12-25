import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import {Icon} from 'antd'
import { cookie } from '../../utils/cookie'
import './accountManage.scss'

import * as AccountAction from '../accountManage/accountManageAction'
 class AccountComponent extends React.Component{
    backPage() {
        hashHistory.push('myPage')
    }
    render() {
         return(
             <div id="account_zcy">
                <div className="head_account">
                    <Icon type="left" onClick={this.backPage.bind(this)}></Icon>
                    <h3>我的账户</h3>
                </div>
                <dl>
                    <dt>
                        <dd>用户名</dd>
                        <div className="blank"></div>
                        <dd>性别</dd>
                        <div className="blank"></div>
                        <dd>生日</dd>
                        <div className="blank"></div>
                        <dd>地区</dd>
                        <div className="blank"></div>
                        <dd>我的收货地址</dd>
                        <div className="blank"></div>
                        <dd>修改密码</dd>
                        <div className="blank"></div>
                    </dt>
                </dl>
             </div>
         )
     }
 }

 const mapToState = function(state) {
    console.log(state);
    return {
        type: state.account.type,
        dataset: state.account.account || []
    }
 }

export default connect(mapToState, AccountAction)(AccountComponent);