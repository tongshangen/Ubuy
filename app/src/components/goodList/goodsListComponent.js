import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'

import * as LightActions from '../goodList/goodsListAction'

class LightComponent extends React.Component{
    render(){
        return (
            <div>
                
            </div>
        )
    }
}

//DataModel => m
const mapToState = function(state){
    console.log(state);
    return {
        type: state.goodslist.type,
        dataset: state.goodslist.body || []
    }
}

//controller => c

//connect => state and action 
//自动调用 reducer
//自动凋用了 setState
export default connect(mapToState, LightActions)(LightComponent)