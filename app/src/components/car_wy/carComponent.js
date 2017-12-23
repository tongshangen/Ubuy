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
    componentDidUpdate(){
        this.getTotal();
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
                    break;
                }else{
                    this.setState({isAllChecked:true});
                }
            }
        }
    }
    // 封装计算勾选商品总价的函数
    getTotal(){
        // 总价元素
        var totleprice_ele = document.getElementsByClassName('totleprice')[0];
        // 选中商品总数
        var totlenum_ele = document.getElementsByClassName('totlenum')[0];
        // 单件商品价格元素
        var price_num = document.getElementsByClassName('price_num');
        // 单个商品数量元素
        var num = document.getElementsByClassName('num');
        // 循环遍历每个商品计算价格
        var isCheck = document.getElementsByClassName('anticon anticon-check-circle');
        var totleprice = 0;
        var totlenum = 0;
                
        for(var i=1;i<=isCheck.length-2;i++){
            if(isCheck[i].className == 'anticon anticon-check-circle checked'){
                // console.log(num[i-1].value);
                totleprice += price_num[i-1].innerText*1*num[i-1].value;
                totlenum += num[i-1].value*1;
            }
        }
        // 第一次的时候为undifined
        if(!totleprice_ele || !totlenum_ele){
            return;
        }
        totleprice_ele.innerHTML = totleprice;
        totlenum_ele.innerHTML = totlenum;
    }
    // 减少商品数量
    reduceNum = (e) => {
        // 商品数量元素
        var num = e.target.parentNode.getElementsByClassName('num')[0];
        var carid = e.target.getAttribute("data-id");
        if(num.value == 1){
            return ;
        }
        num.value--;
        this.getTotal();

        // 判断选中才发起请求
        if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('anticon anticon-check-circle')[0].className == 'anticon anticon-check-circle checked'){
            this.props.updateData("car_update.php",{goodnum:num.value,carid:carid},'post');
        }
        
    }

    // 增加商品数量
    addNum = (e) => {
        // 商品数量元素
        var goodnum = e.target.parentNode.getElementsByClassName('num')[0];
        var carid = e.target.getAttribute("data-id");
        goodnum.value++;
        this.getTotal();

        // 判断选中才发起请求
        if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('anticon anticon-check-circle')[0].className == 'anticon anticon-check-circle checked'){
            this.props.updateData("car_update.php",{goodnum:goodnum.value,carid:carid},'post');
        }
        
    }

    // 删除商品
    delgoods = (e) => {
        // console.log(e.target.className == 'anticon anticon-delete delgoods');
        var carid = e.target.getAttribute("data-id");
         // 判断选中才发起请求
         if(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getElementsByClassName('anticon anticon-check-circle')[0].className == 'anticon anticon-check-circle checked'){
            this.props.delData("car_del.php",{carid:carid},'post');
         }
         this.props.getData("car_sel.php",{userid:1})
    }

    render(){
        // this.getTotal();
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
                        <div className="header_classify_r" onClick={this.save}>
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
                                        <li key={'goods' + index} data-id={obj.carid}>
                                            <div className="goods_l">
                                                <Icon type="check-circle" onClick={this.clickCheck} className="checked"/>
                                            </div>
                                            <div className="goods_r">
                                                    <p className="title">{obj.name}</p>
                                                    <div className="goods_r_m">
                                                        <div className="goods_r_m_l">
                                                            <img src={obj.imgurl} alt=""/>
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
                                                                    <Icon type="minus" className="minus" data-id={obj.carid} onClick={this.reduceNum}/>
                                                                    <input type="text" className="num" defaultValue={obj.goodnum}/>
                                                                    <Icon type="plus" className="plus" data-id={obj.carid} onClick={this.addNum.bind(this)}/>
                                                                </div>
                                                                <div className="info_num_r">
                                                                    <Icon type="delete" data-id={obj.carid} className="delgoods" onClick={this.delgoods}></Icon>
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
                                <span>总计：<em>￥</em><em className="totleprice">0</em>(不含运费)</span>
                            </div>
                            <Link to='/car/order'><div className="cal_r_r" onClick={this.balance}>去结算(<span className="totlenum"></span>)</div></Link>
                        </div>
                    </div>
                    <div className="footer_wy">
                        <span>首页</span>
                        <Link to="/classify"><span>分类</span></Link>
                        <span>分享购</span>
                        <Link to="/car"><span>购物车</span></Link>
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