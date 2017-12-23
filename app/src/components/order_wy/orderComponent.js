import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as orderAction from './orderAction';
import './order.scss'

import { Layout, Menu, Breadcrumb, Icon, Carousel, Radio,InputNumber} from 'antd';
import { browserHistory } from 'react-router';

class carComponent extends React.Component{ 
    render(){
        return(
            <div className="box_wy">
                <h3>结算中心</h3>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    return {
        loading: state.order.loading,
        dataset: state.order.response
    }
}

export default connect(mapStateToProps, orderAction)(orderComponent)