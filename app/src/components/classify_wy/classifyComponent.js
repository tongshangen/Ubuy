import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as classifyAction from './classifyAction';
import './classify.scss'

import {Icon, Tabs, Select, Row, Col} from 'antd';

const TabPane = Tabs.TabPane;
const Option = Select.Option;


class classifyComponent extends React.Component{
    state = {
        tabPosition: 'left',
    }
    changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
    }
    render (){
        return(
            <div className="box_wy">
                <div className="header_classify">
                    <div className="header_classify_l">
                        <Icon type="left"></Icon>
                    </div>
                    <div className="header_classify_c">
                        <input type="text" placeholder="请输入关键字" className="search_input"/>
                        <Icon type="search" className="search"></Icon>
                    </div>
                    <div className="header_classify_r">
                        <Icon type="bars"></Icon>
                    </div>
                </div>
                <div className="main_classify">
                    <div className="main_classify_l">
                        <Tabs tabPosition={this.state.tabPosition}>
                            <TabPane tab="女鞋" key="1">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="男鞋" key="2">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/manShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="运动" key="3">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/sports_wy.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="户外" key="4">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/huwai.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="童鞋童装" key="5">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/child_wy.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="全部品牌" key="6">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="专柜同款" key="7">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/shoppe_wy.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="她他" key="8">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="天美意" key="9">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="百丽" key="10">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="思加图" key="11">
                                <div className="main_classify_r">
                                    <div className="header_logo_img">
                                        <img src={require('../../libs/images/womenShoes.jpg')} alt=""/>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>热门品牌</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/belle_wy.jpg')} alt=""/>
                                                百丽
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>极简实穿</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士单鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士靴子</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="hot_brand">
                                        <h3>女士凉鞋</h3>
                                        <Row>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/teenmix_wy.jpg')} alt=""/>
                                                天美意
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                            <Col span={8}>
                                                <img src={require('../../libs/images/white_wy.jpg')} alt=""/>
                                                小白鞋
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="森达" key="12">Content of Tab 2</TabPane>
                        </Tabs>
                    </div> 
                   <div className="main_classify_r"></div>
                </div>
                <div className="footer_classify">
                    <ul>
                        <li><Icon type="home">首页</Icon></li>
                        <li><Icon type="appstore">分类</Icon></li>
                        <li><Icon type="shopping-cart">购物车</Icon></li>
                        <li><Icon type="user">我的优购</Icon></li>
                    </ul>
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

export default connect(mapStateToProps, classifyAction)(classifyComponent)
