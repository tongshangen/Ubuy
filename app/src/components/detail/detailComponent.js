import React from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import "../../libs/base/rem.js"
import { Layout, Menu, Breadcrumb, Icon, Carousel,BackTop} from 'antd'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'
import * as detailActions from '../detail/detailAction'

// import "../detail/detail.scss"
const { Header, Footer, Content } = Layout;
class detailComponent extends React.Component{
    componentDidMount(){
        this.props.getGoodDetail();
         $('.ant-layout-header .anticon-left').click(function(event) {
            window.history.back();
        });
    }
     
    getKeys(item){
        var newObj = (item ? Object.keys(item) : []);
        return newObj
    }
    render(){
        return (
            <div>
                 <Layout>
                      <Header className="detailHeader">
                      <span className="icon"><i><Icon type="left" /></i></span>
                      
                      <span className="icon"><i><Icon type="heart-o" /></i></span>
                      <span className="icon "><i><Icon type="share-alt" /></i></span>
                      </Header>
                      <Content className="detailContent">
                      {
                        this.props.dataset.slice(0,1).map(function(item,index){
                            return (
                            <div className="detailBody"> 
                            <div className="banner">
                                    <img src={item.imgurl}/>
                            </div>
                            <div className="introduce">{item.name}</div>
                            <div className="fenlei">{item.name.slice(-16,-8)}</div>
                            <div className="price">￥{item.price} <span>￥<del>{item.Oprice}</del></span><span className="pr">无可用优惠券</span></div>
                            <div className="choose">已选 <span className="thscolor">{item.color}色</span>
                            <span className="chooseSize">请选择尺码<Icon type="right" /></span>
                            </div>
                            <div className="preview"></div>
                            <div className="brand">
                            <div>
                            品牌:<span>{item.name.slice(0,4)}</span>
                            </div>
                            <div>
                            发货:<span>百丽优购</span>
                            </div>
                            </div>
                            
                            
                            <div className="ifLike">
                           <div className="likeTop">
                           <span>喜欢此商品的人还买了</span>
                           </div>
                           <div className="likeBody"></div>
                           </div>
                           <div className="help"><i><Icon type="customer-service" /></i><span>联系客服</span> </div>
                            <div className="moreDetail">上拉查看详情</div>     
                          </div>
                            )
                        })


                      }
                      </Content>
                      <Footer className="detailFooter">
                      <div className="left">
                      <span className="carCount"></span>
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
                        
                        <strong style={{ color: '#1088e9' }}> blue </strong>
                      
                      </div>
                      <div onClick={this.props.detailHistory}>
                        <BackTop>
                          <div className="ant-back-top-inner" style={{ position:'fixed',bottom:'1.5rem'}}><Icon type="eye" /></div>
                        </BackTop>
                    
                      </div>
                </Layout>
            </div>
            )
    }
}
const mapToState = function(state){
    console.log(state);
    return {
        type: state.detail.type,
        dataset: state.detail.body || []
    }
}

//controller => c

//connect => state and action 
//自动调用 reducer
//自动凋用了 setState
export default connect(mapToState, detailActions)(detailComponent)