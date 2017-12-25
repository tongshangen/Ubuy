import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import * as homeAction from './homeAction';
import { Layout, Menu, Breadcrumb, Icon, Carousel} from 'antd';
import { browserHistory } from 'react-router';
import Spinner from '../spinner/SpinnerComponent'
class homeComponent extends React.Component{
   render() {
        return (
            <div>
                <h1>我是首页</h1>
                <Spinner/>
            </div>
        )
   }
}

const mapStateToProps = function(state){
    var dataset  = state.home.dataset || '[]';
    return {
        loading: state.home.loading,
        dataset: dataset[0] || []
    }
}

export default connect(mapStateToProps, homeAction)(homeComponent)