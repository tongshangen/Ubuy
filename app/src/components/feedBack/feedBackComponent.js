import React from 'react';
import { Icon} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import './feedBack.scss'

export default class HelpCenter extends React.Component{
    render(){
        return(
            <div id="feedBack_cts">
                <div className="header">
                    <h3><Link to="/mypage"><Icon type="left" /></Link>意见反馈</h3>
                </div>
                <div className="feedBack_footer">
                    <div className="feedBack_type">
                        <h4>反馈类型</h4>
                        <ul>
                            <li>配送服务</li>
                            <li>软件报错</li>
                            <li>意见反馈</li>
                            <li>其他</li>
                        </ul>
                    </div> 
                    <div className="feedBack_words">
                        <textarea></textarea>
                    </div>
                    <div className="username_cts">
                        <input type="text"/>
                    </div>
                    <div className="btn_cts">
                        <button>提交</button>
                    </div>
                </div>
            </div>
        )
    }
}