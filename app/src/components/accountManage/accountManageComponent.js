import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Icon, DatePicker } from 'antd'
import { cookie } from '../../utils/cookie'
import './accountManage.scss'
import * as AccountAction from '../accountManage/accountManageAction'
import $ from 'jquery'
class AccountComponent extends React.Component{
    backPage() {
        hashHistory.push('myPage')
    }
    onChange(date, dateString) {
        console.log(date, dateString);
    }
    toDizhi() {
        hashHistory.push('/account/dizhi')
    }
    toXiuGaiPwd() {
        hashHistory.push('/account/changepwd')
    }

    render() {
         return(
             <div id="account_zcy">
                <div className="head_account">
                    <Icon type="left" onClick={this.backPage.bind(this)}></Icon>
                    <h3>我的账户</h3>
                </div>
                    <div className="haha">
                        <div className="heihei">
                            <div>
                                用户名
                                <span>1111111</span>
                            </div>
                            <div className="choice">
                              <label>性别</label>
                              <select>
                                <option value="男">男</option>
                                <option value="女">女</option>
                              </select>
                            </div>
                            <div className="birthday">
                                <label>生日</label>
                                <DatePicker onChange={this.onChange.bind(this)} />
                            </div>
                            <div className="dizhi">
                                <label>我的收货地址</label>
                                <Icon type="right" onClick={this.toDizhi.bind(this)}/>
                            </div>
                            <div className="xiugaiPwd">
                                <label>修改密码</label>
                                <Icon type="right" onClick={this.toXiuGaiPwd.bind(this)} />
                            </div>
                        </div>
                    </div>
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