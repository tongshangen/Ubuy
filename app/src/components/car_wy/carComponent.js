import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as carAction from './carAction';
import './car.scss'

import { Layout, Menu, Breadcrumb, Icon, Carousel, Radio,InputNumber} from 'antd';
import { browserHistory } from 'react-router';

class carComponent extends React.Component{    
    componentDidMount(){
        this.props.getData("car_sel.php",{userid:1})
    } 

    state = {
        isAllChecked:true,
    }
    // 点击头部全选
    handleClick = (e) => {
        this.setState({isAllChecked:!this.state.isAllChecked});
        
        // 每个li里面的选择按钮
        var isCheck = document.getElementsByClassName('anticon anticon-check-circle');
            for(var i=1;i<=isCheck.length-2;i++){
                // 跟随头部全选变化
                if(this.state.isAllChecked){
                    isCheck[i].className = 'anticon anticon-check-circle unchecked';
                }else{
                    isCheck[i].className = 'anticon anticon-check-circle checked';
                }
                
            }
    }

    clickCheck = (e) => {
        // 单个li来判断全选状态
        var isCheck = document.getElementsByClassName('anticon anticon-check-circle');
        if(e.target.className == 'anticon anticon-check-circle checked'){
            e.target.className = 'anticon anticon-check-circle unchecked';
            this.setState({isAllChecked:false});
        }else if(e.target.className == 'anticon anticon-check-circle unchecked'){
            e.target.className = 'anticon anticon-check-circle checked';
            for(var i=1;i<=isCheck.length-2;i++){
                if(isCheck[i].className == 'anticon anticon-check-circle unchecked'){
                    this.setState({isAllChecked:false});
                }else{
                    this.setState({isAllChecked:true});
                }
            }
        }
    }
    // 封装计算勾选商品总价的函数
    getTotal(){

    }
    
    addNum = (e) => {
        console.log(e)
        // e.target.value++;
    }
    render(){
        
        if(!this.props.dataset){
            return null
        }else{
            var dataset = JSON.parse(this.props.dataset);
        }
        
        var color = {
            color:this.state.isAllChecked ? 'red' : '#ccc'
        }
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
                            <Icon type="check-circle" className="allselect" onClick={this.handleClick} style={color}/>
                            <h4>百丽优购</h4>
                        </div>
                        <ul className="goods">
                            {
                                dataset.map(function(obj, index){
                                    return (
                                        <li key={'goods' + index} data-id={obj.goodid}>
                                            <div className="goods_l">
                                                <Icon type="check-circle" onClick={this.clickCheck} className="checked"/>
                                            </div>
                                            <div className="goods_r">
                                                    <p className="title">{obj.name}</p>
                                                    <div className="goods_r_m">
                                                        <div className="goods_r_m_l">
                                                            <img src={require(`../../libs/images/${obj.imgurl}.jpg`)} alt=""/>
                                                        </div>
                                                        <div className="goods_r_m_r">
                                                            <div className="info_t">
                                                                <span className="color">颜色：{obj.color}</span>
                                                                <span className="price"><i>￥</i><i className="price_num">{obj.price}</i></span>
                                                            </div>
                                                            <div className="info_c">
                                                                <span>尺码：<i>{obj.size}</i></span>
                                                            </div>
                                                            <div className="info_b">
                                                                <span>发货：百丽优购</span>
                                                            </div>
                                                            <div className="info_num">
                                                                <div className="info_num_l">
                                                                    <Icon type="minus" className="minus" onClick={this.reduceNum}/>
                                                                    <input type="text" className="num" defaultValue={1}/>
                                                                    <Icon type="plus" className="plus" onClick={this.addNum.bind(this)}/>
                                                                </div>
                                                                <div className="info_num_r">
                                                                    <Icon type="delete"></Icon>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </li>
                                    )
                                }.bind(this))
                            }
                        </ul>    
                    </div>
                    <div className="calculate_wy">
                        <div className="cal_l">
                            <Icon type="check-circle" className="allselect" onClick={this.handleClick} style={color}/>
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
    // console.log(state.car.response);
    return {
        loading: state.car.loading,
        dataset: state.car.response
    }
}

export default connect(mapStateToProps, carAction)(carComponent)