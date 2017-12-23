import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import "../../libs/base/rem.js"
import { Layout, Menu, Breadcrumb, Icon, Carousel,BackTop} from 'antd'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import * as detailActions from '../detail/detailAction'

import "../detail/detail.scss"
const { Header, Footer, Content } = Layout;
class detailComponent extends React.Component{
    componentDidMount(){
        
    }

    getKeys(item){
        var newObj = (item ? Object.keys(item) : []);
        return newObj
    }
    render(){
        return (
            <div>
                 <Layout>
                      <Header>
                      <span className="icon"><i><Icon type="left" /></i></span>
                      
                      <span className="icon"><i><Icon type="heart-o" /></i></span>
                      <span className="icon "><i><Icon type="share-alt" /></i></span>
                      </Header>
                      <Content>
                            <div className="detailBody"> 

                            </div>
                      </Content>
                      <Footer>
                      <div className="left">
                            <Icon type="shopping-cart" />
                      </div>
                      <div className="center">
                        加入购物车
                      </div>
                      <div className="right">
                        去结算
                      </div>
                      </Footer>
                       <div>
                        <BackTop>
                          <div className="ant-back-top-inner" style={{ position:'fixed',bottom:'1rem'}}><Icon type="up-square" /></div>
                        </BackTop>
                        Scroll down to see the bottom-right
                        <strong style={{ color: '#1088e9' }}> blue </strong>
                        button.
                      </div>
                      
                </Layout>
            </div>
            )
    }
}
const mapToState = function(state){
    console.log(state);
    return {
        //type: state.detail.type,
        //dataset: state.detail.body || []
    }
}

//controller => c

//connect => state and action 
//自动调用 reducer
//自动凋用了 setState
export default connect(mapToState, detailActions)(detailComponent)