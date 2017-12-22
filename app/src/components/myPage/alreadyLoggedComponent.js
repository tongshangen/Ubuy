import React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';

export default class alreadyLogged extends React.Component{
    render(){
        return(
            <div className="header_cts">
                <div className="alreadyLogged">
                    <div className="TX"><i></i></div>
                    <div className="usermsg">
                        <h3>用户名</h3>
                        <span className="le">会员等级</span>
                        <span>账户管理<Icon type="right" /></span>
                    </div>
                </div>
            </div>
        )
    }
}
