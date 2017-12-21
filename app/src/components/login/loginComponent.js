import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';
import { Input, Icon, Checkbox, Button, Switch} from 'antd'
import "./login.scss"
// import * as LightActions from '../goodList/goodsListAction'
class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            passWord: ''
        };
    }

    emitEmpty = () =>{
        this.userNameInput.focus();
        this.setState({userName: ''});
    }
    onBlurUserName = (e) =>{
        this.setState({userName: e.target.value})
    }

    changeName(event) {
        // this.setState({userName:event.target.value})
        console.log(this.state.userName)
    }
    changePsd(event) {
        console.log(event.target.value)
    }

    savePsd(event) {
        console.log(event.target.value)
    }
    loginIn() {
        console.log(this.props.refs)
    }
    savepsd() {
        console.log()
    }
    componentDidMount() {
        
    }   
    render (){
        const {userName} = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return(
            <div id="login_z">
                <div className="login_z_head">
                    <h2>用户登录</h2>
                    <i></i>
                </div>
                <p>欢迎来到xxx购</p>
                <div className="login_z_main">
                    <div className="user">
                        <Input type="text" placeholder="请输入您的用户名" onChange={this.changeName} ref="username"/>
                    </div>
                    <div className="psd">
                        <Input type="password" placeholder="请输入您的密码" onChange={this.changePsd} ref="password" />
                    </div>
                    <div className="savePsd">
                        <Switch className="save" onClick={this.savepsd}/>记住密码
                    </div>
                    <div className="loginIn">
                        <Button type="primary" ref="log" onClick={this.loginIn}>立即登录</Button>
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
export default LoginComponent;
