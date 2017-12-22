import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import { Tabs, Icon} from 'antd';

import './collect.scss'

export default class CollectComponent extends React.Component{
    render(){
        return(
            <div id="collect_cts">
                <div className="collect_top">
                    <div className="header">
                        <h3><Link to="/mypage"><Icon type="left" /></Link>我的收藏</h3>
                    </div>
                </div>
                <div className="collect_footer">
                    <Tabs defaultActiveKey="1" onChange={callback} className="menus_all">
                        <TabPane tab="全部" key="1" className="menuItem">
                            <div className="collect_all">
                                <div className="left"><img  src="http://localhost:3032/src/libs/default/img1.jpg"/></div>
                                <div className="rigth">
                                    <p>jsaidajjdsisadas</p>
                                    <span className="cost">￥1490</span>
                                    <span>￥448</span>
                                    <button>加入购物车</button>
                                </div>
                            </div>
                            <div className="collect_all">
                                <div className="left"><img  src="http://localhost:3032/src/libs/default/img1.jpg"/></div>
                                <div className="rigth">
                                    <p>jsaidajjdsisadas</p>
                                    <span className="cost">￥1490</span>
                                    <span>￥448</span>
                                    <button>加入购物车</button>
                                </div>
                            </div>
                            <div className="collect_all">
                                <div className="left"><img  src="http://localhost:3032/src/libs/default/img1.jpg"/></div>
                                <div className="rigth">
                                    <p>jsaidajjdsisadas</p>
                                    <span className="cost">￥1490</span>
                                    <span>￥448</span>
                                    <button>加入购物车</button>
                                </div>
                            </div>
                            <div className="collect_all">
                                <div className="left"><img  src="http://localhost:3032/src/libs/default/img1.jpg"/></div>
                                <div className="rigth">
                                    <p>jsaidajjdsisadas</p>
                                    <span className="cost">￥1490</span>
                                    <span>￥448</span>
                                    <button>加入购物车</button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="降价" key="2" className="menuItem">
                            您暂无此记录
                        </TabPane>
                        <TabPane tab="即将断货" key="3" className="menuItem">
                            您暂无此记录
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
  }