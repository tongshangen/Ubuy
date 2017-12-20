import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as carAction from './carAction';
import './car.scss'

import { Layout, Menu, Breadcrumb, Icon, Carousel, Radio,InputNumber} from 'antd';
import { browserHistory } from 'react-router';

class carComponent extends React.Component{
    state = {       
        text: true
    }

    handleClick = (e) => {        
        this.setState({text:!this.state.text})
        e.preventDefault();
        e.stopPropagation();
    }
    render(){
        console.log(Radio);
        var res = this.state.text ? '完成' : '编辑';
        return(
            <div className="box_wy">
                <div className="container_wy">
                    <div className="header_wy">
                        <h3>购物车</h3>
                        <span onClick={this.handleClick}>{res}</span>
                    </div>
                    <div className="main_wy">
                        <div className="main_header">
                            {/* <Radio className="allselect"/> */}
                            {/* <input type="radio" name="" id="" className="allselect"/> */}
                            <Icon type="check-circle" className="allselect"/>
                            <h4>百丽优购</h4>
                        </div>
                        <ul className="goods">
                            <li>
                                <Icon type="check-circle" className="goodsselect"/>
                                <img src={require("../../libs/images/goods001.jpg")} className="goodsImg" alt=""/>
                                <div className="goods_r">
                                    <h4 className="title">配料的爱好手机号</h4>
                                    <div className="cont">
                                        <div className="cont_t">
                                            <div className="cont_t_l">
                                                <span>颜色：</span>
                                                <span className="color">黑色</span>
                                            </div>
                                            <div className="cont_t_r">
                                                <i>￥</i><span className="price">318</span>
                                            </div>
                                        </div>
                                        <div className="cont_c">
                                            <div className="cont_c_l">
                                                <span>尺码</span>
                                                <span className="size">35</span>
                                            </div>
                                            <div className="cont_c_r">
                                                <span>已降10元</span>
                                            </div>
                                        </div>
                                        <div className="cont_b">
                                            <div className="cont_b_l">
                                                <span>发货：百丽优购</span>
                                            </div>
                                            <div className="cont_b_r">
                                                <Icon type="minus" className="minus"/>
                                                <input type="text" className="num" value={1}/>
                                                <Icon type="plus" className="plus"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Icon type="check-circle" className="goodsselect"/>
                                <img src={require("../../libs/images/goods001.jpg")} className="goodsImg" alt=""/>
                                <div className="goods_r">
                                    <h4 className="title">配料的爱好手机号</h4>
                                    <div className="cont">
                                        <div className="cont_t">
                                            <div className="cont_t_l">
                                                <span>颜色：</span>
                                                <span className="color">黑色</span>
                                            </div>
                                            <div className="cont_t_r">
                                                <i>￥</i><span className="price">318</span>
                                            </div>
                                        </div>
                                        <div className="cont_c">
                                            <div className="cont_c_l">
                                                <span>尺码</span>
                                                <span className="size">35</span>
                                            </div>
                                            <div className="cont_c_r">
                                                <span>已降10元</span>
                                            </div>
                                        </div>
                                        <div className="cont_b">
                                            <div className="cont_b_l">
                                                <span>发货：百丽优购</span>
                                            </div>
                                            <div className="cont_b_r">
                                                <Icon type="minus" className="minus"/>
                                                <input type="text" className="num" value={1}/>
                                                <Icon type="plus" className="plus"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="calculate_wy">
                        
                    </div>
                    <div className="footer_wy">
                        <span>首页</span>
                        <span>分类</span>
                        <span>分享购</span>
                        <span>购物车</span>
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