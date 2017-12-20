import React from 'react';
import {Router, Route, Link, hashHistory, IndexRoute}  from 'react-router';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Avatar , Dropdown} from 'antd';
import {connect} from 'react-redux';
import * as HomeAction from './HomeAction';


class HomeComponent extends React.Component {
	render(){
        return (
          <div>
            <h1>后台管理系统</h1>
          </div>
		  )
	}
}
const mapStateToProps = function(){
    return {

    }
}
export default connect(mapStateToProps, HomeAction)(HomeComponent)