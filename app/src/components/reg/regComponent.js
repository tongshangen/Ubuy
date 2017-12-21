import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Input, Icon, Checkbox, Button, Switch} from 'antd'

import "./reg.scss"

import * as RegActions from '../reg/regAction'
class RegComponent extends React.Component{
    componentDidMount() {
        this.props.regChangeUser()
    }
    regChangeUser() {
        console.log(this.state)
    }
    render() {
        return(
            <div id="reg_z">
                <div className="reg_z_head">
                    <Icon type="left" className="icon_left"/>
                    <h2>用户注册</h2>
                    <Icon type="right" 
                    className="icon_right" />
                </div>
                <div className="reg_z_main">
                    <div className="reg_user">
                        <Input type="text" placeholder="请输入您的用户名" ref="regUser" onBlur={this.regChangeUser.bind(this)}/>
                    </div>
                    <div className="reg_psd">
                        <Input type="password" placeholder="请输入您的密码" ref="regPsd"/>
                    </div>
                    <div className="reg_repsd">
                        <Input type="password" placeholder="请再次确认您的密码" ref="regRepsd"/>
                    </div>
                    <div className="reg_email">
                        <Input type="text" placeholder="请输入您的邮箱" ref="regEmail"/>
                    </div>
                    <div className="reg_tel">
                        <Icon type=""/>
                        <Input type="text" placeholder="请确认您的联系电话" ref="regTel"/>
                    </div>
                    <div className="read">
                        <Switch className="read_file" />我已阅读并同意协议
                    </div>
                    <div className="register">
                        <Button type="danger" ref="register">立即登录</Button>
                    </div>
                </div>
                <div className="beizhu">
                    <p>CopyRight©2017 AllMobilize Inc.</p>
                    <p>京ICP备13033158</p>
                </div>
            </div>
        )
    }
}

const mapToState = function(state){
    console.log(state);
    return {
        type: state.reg.type,
        dataset: state.reg.body || []
    }
}


export default connect(mapToState, RegActions)(RegComponent);