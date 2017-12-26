import React from 'react';
import {connect} from 'react-redux';
import {Tabs, Icon} from 'antd';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

import './viewhistory.scss'

export default class ViewHistoryComponent extends React.Component{
    componentDidMount(){
        var aa = {
            name:'hahahah',
            price:1390
        }
        document.cookie =JSON.stringify(aa);
       
        // document.cookie = 'name=laoxie';
        // this.props.normalSearch();
        
    }
    componentWillMount(){
        var cookies = document.cookie;
        this.setState({list:cookies})
        // console.log(cookies)
        
    }
    state={
        list:''
    }
    aa(item){
        var html='';
        console.log(item["name"])
        item = JSON.parse(item)
        item.map(function(obj){
			return `<li>${obj.name}</li>`
		}).join('');
        // return html;
    }
    render(){
        console.log(this.state.list)
        return(
            <div id="viewhistory_cts">
                <div className="viewhistory_top">
                    <div className="header">
                        <h3><Link to="/mypage"><Icon type="left" /></Link>浏览记录</h3>
                        <span>清空</span>
                    </div>
                </div>
                <div className="viewhistory_footer">
                    <div className="viewhistory_all">
                        <div className="left"><img  src="http://localhost:3032/src/libs/default/img1.jpg"/></div>
                        <div className="rigth">
                            <p>jsaidajjdsisadas</p>
                            <span className="cost">￥1490</span>
                            <span>￥448</span>
                            <Icon type="right" />
                        </div>
                    </div>
                    {
                        // this.aa(this.state.list)
                        // this.state.list.map(function(item,idx){
                        //     console.log(item);
                        //     return (<li></li>)
                        // })
                        
                    }
                    
                </div>
            </div>
        )
    }
}

                   
{/* <div className="viewhistory_all">
    <div className="left"><img  src="http://localhost:3032/src/libs/default/img1.jpg"/></div>
    <div className="rigth">
        <p>jsaidajjdsisadas</p>
        <span className="cost">￥1490</span>
        <span>￥448</span>
        <Icon type="right" />
    </div>
</div> */}
                  