import React from 'react';
import { Icon } from 'antd';
import { cookie } from '../../utils/cookie'
import './footer.scss'
export default class footerComponent extends React.Component {
    render() {
        return (
            <div className="footer_zcy">
                <ul>
                    <li>
                        <Icon type="home"></Icon>
                        <p>首页</p>
                    </li>
                    <li>
                        <Icon type="appstore-o"></Icon>
                        <p>分类</p>
                    </li>
                    <li>
                        <Icon type="shopping-cart"></Icon>
                        <p>购物车</p>
                    </li>
                    <li>    
                        <Icon type="user">

                        </Icon>
                        <p>我的</p>
                    </li>                    
                </ul>
            </div>
        )
    }
}