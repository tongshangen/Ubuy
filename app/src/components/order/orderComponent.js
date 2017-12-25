import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { Tabs, Icon } from 'antd';
import * as OrderActions from '../order/orderAction';
import './order.scss'

class OrderComponent extends React.Component {
    constructor(props){
        super(props)

    }
    componentDidMount() {
        // console.log(this.state)
        this.props.getData();
    }
    
    btn() {
        console.log(this.props.dataset)
        this.props.dataset.map(function(item,idx){
            console.log(item)
        })
    }

    render() {
        return (
            <div id="order_zcy">
                <div className="order_top">
                    <div className="header">
                        <h3><Link to="/mypage"><Icon type="left" /></Link>我的订单</h3>
                    </div>
                </div>
                <div className="order_footer">
                    <Tabs defaultActiveKey="1" onChange={callback} className="menus_all">
                        <TabPane tab="全部" key="1" className="menuItem">
                            {
                                this.props.dataset.map(function(item,idx){
                                    return (
                                        <div className="order_all" key={idx}>
                                            <div className="left">
                                                <img src="http://localhost:3032/src/libs/default/img1.jpg" />
                                            </div>
                                        <div className="rigth">
                                            <p>{item.name}</p><br/>
                                            <span>￥{item.price}</span>
                                            <button>去支付</button>
                                            <em>订单号:M45242432</em>
                                    </div>
                                </div>
                                    )
                                })
                                
                            }
                                
                        </TabPane>
                        <TabPane tab="代付款" key="2" className="menuItem">
                            您暂无此记录
                        </TabPane>
                        <TabPane tab="已付款" key="3" className="menuItem">
                            您暂无此记录
                        </TabPane>
                        <TabPane tab="待评价" key="4" className="menuItem">
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
const mapToState = function(state){
    console.log(state)
    return {
        type: state.order.type,
        dataset: state.order.response || []
    }
}
export default connect(mapToState, OrderActions)(OrderComponent);