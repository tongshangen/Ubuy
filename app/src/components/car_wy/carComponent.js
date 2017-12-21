import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as carAction from './carAction';
import './car.scss'

import { Layout, Menu, Breadcrumb, Icon, Carousel, Radio,InputNumber} from 'antd';
import { browserHistory } from 'react-router';

class carComponent extends React.Component{ 
    render(){
        return(
            <div className="box_wy">
                <div className="container_wy">
                    <div className="header_car">
                        <div className="header_classify_l">
                            <Icon type="left"></Icon>
                        </div>
                        <h3>购物车</h3>
                        <div className="header_classify_r">
                            <Icon type="bars"></Icon>
                        </div>
                    </div>
                    <div className="main_car_wy">
                        <div className="main_header">
                            <Icon type="check-circle" className="allselect"/>
                            <h4>百丽优购</h4>
                        </div>
                        <ul className="goods">
                            <li>
                                <div className="goods_l">
                                    <Icon type="check-circle" className="allselect"/>
                                </div>
                                <div className="goods_r">
                                    <p className="title">NIKE耐克2017年新款男大童NIKE TEAM HUSTLE D 8 (GS)篮球鞋881941-001</p>
                                    <div className="goods_r_m">
                                        <div className="goods_r_m_l">
                                            <img src={require('../../libs/images/goods01_wy.jpg')} alt=""/>
                                        </div>
                                        <div className="goods_r_m_r">
                                            <div className="info_t">
                                                <span className="color">颜色：黑/金色银/白</span>
                                                <span className="price"><i>￥</i><i className="price_num">368</i></span>
                                            </div>
                                            <div className="info_c">
                                                <span>尺码：<i>37.5</i></span>
                                            </div>
                                            <div className="info_b">
                                                <span>发货：百丽优购</span>
                                            </div>
                                            <div className="info_num">
                                                <div className="info_num_l">
                                                    <Icon type="minus" className="minus"/>
                                                    <input type="text" className="num" value={1}/>
                                                    <Icon type="plus" className="plus"/>
                                                </div>
                                                <div className="info_num_r">
                                                    <Icon type="delete"></Icon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="calculate_wy">
                        <div className="cal_l">
                            <Icon type="check-circle" className="allselect"/>
                            <span>全部</span>
                        </div>
                        <div className="cal_r">
                            <div className="cal_r_l">
                                <span>总计：<em>￥</em><em>0</em>(不含运费)</span>
                            </div>
                            <div className="cal_r_r">去结算</div>
                        </div>
                    </div>
                    <div className="footer_wy">
                        <span>首页</span>
                        <span><Link to="/classify">分类</Link></span>
                        <span>分享购</span>
                        <span><Link to="/car">购物车</Link></span>
                        <span>我的</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    var dataset  = state.car.dataset || '[]';
    return {
        loading: state.car.loading,
        dataset: dataset[0] || []
    }
}

export default connect(mapStateToProps, carAction)(carComponent)