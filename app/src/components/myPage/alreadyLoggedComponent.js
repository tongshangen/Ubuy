import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import {cookie} from '../../utils/cookie'
import {message} from 'antd'
export default class alreadyLogged extends React.Component{
    componentWillUpdate(nextProps,nextState) {
        // console.log()
        // cookie.get(name)
    }

     componentWillMount() {
        //  拿cookie
        
         console.log(cookie.get('userId'))
     }
    render(){
        return(
            <div className="header_cts">
                <div className="alreadyLogged">
                    <div className="TX"><i></i></div>
                    <div className="usermsg">
                        <h3>用户{cookie.get('userId')}</h3>
                        <span className="le">会员等级</span>
                        <span>账户管理<Icon type="right" /></span>
                    </div>
                </div>
            </div>
        )
    }
}
