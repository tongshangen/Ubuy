import React from 'react'
import ReactDOM from 'react-dom';
import DataGrid from '../datagrid/DatagridComponent'
import { connect } from 'react-redux';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import * as DatagridAction from '../datagrid/DatagridAction';
import { Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber,Button, Icon,Value} from 'antd';

let data;
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};

const CustomizedForm = Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            username: Form.createFormField({
                ...props.username,
                value: props.username.value,
            }),
        };
    },
    onValuesChange(_, values) {
        console.log(values);
    },
})((props) => {
    const { getFieldDecorator } = props.form;
    return (
        <Form layout="inline">
            <FormItem label="Username">
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Username is required!' }],
                })(<Input />)}
            </FormItem>
        </Form>
    );
});



class goods_editComponent extends React.Component {

    componentDidMount(){
        // this.props.search({ goodid: this.props.data.data1[0].goodid })
        // console.log(this)
    }

    state = {
        goodid: this.props.data.data1[0].goodid,
        name: this.props.data.data1[0].name,
        price: this.props.data.data1[0].price,
        Oprice: this.props.data.data1[0].Oprice,
        brandid: this.props.data.data1[0].brandid,
        types: this.props.data.data1[0].types,
        introduce: this.props.data.data1[0].introduce,
        color: this.props.data.data1[0].color,
        size: this.props.data.data1[0].size,
        iventory: this.props.data.data1[0].iventory
       
    }
    idChange(e) {
        this.setState({ goodid: e.target.value })
    }
    nameChange(e) {
        this.setState({ name: e.target.value })
    }
    priceChange(e) {
        this.setState({ price: e.target.value })
    }
    OpriceChange(e) {
        this.setState({ Oprice: e.target.value })
    }
    brandidChange(e) {
        this.setState({ brandid: e.target.value })
    }
    typesChange(e) {
        this.setState({ types: e.target.value })
    }
    introduceChange(e) {
        this.setState({ introduce: e.target.value })
    }
    colorChange(e) {
        this.setState({ color: e.target.value })
    }
    sizeChange(e) {
        this.setState({ size: e.target.value })
    }
    iventoryChange(e) {
        this.setState({ iventory: e.target.value })
    }
    

    save(){
        
        this.props.edit({
            goodid:this.state.goodid,name: this.state.name, price: this.state.price, Oprice: this.state.Oprice, brandid: this.state.brandid, 
            types: this.state.types,introduce: this.state.introduce, color: this.state.color, size: this.state.size, iventory: this.state.iventory
        })
        console.log(this)

    }
    back(){
        hashHistory.push('/goods_list');
        console.log(this)
    }

    render() {

        return (<div>
            <h2>编辑</h2>
            <Form>
                <FormItem
                    {...formItemLayout}
                    label="ID"
                    hasFeedback
                >
                    <Input placeholder="I'm the id" id="ID" value={this.state.goodid} onChange={this.idChange.bind(this)}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="NAME"
                    hasFeedback
                >
                    <Input placeholder="I'm the name" id="NAME" value={this.state.name} onChange={this.nameChange.bind(this)}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Price"
                    hasFeedback
                >
                    <Input placeholder="I'm the price" id="Price" value={this.state.price} onChange={this.priceChange.bind(this)}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Oprice"
                    hasFeedback
                >
                    <Input placeholder="I'm the oprice" id="Oprice" value={this.state.Oprice} onChange={this.OpriceChange.bind(this)} />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Brandid"
                    hasFeedback
                >
                    <Input placeholder="I'm the brandid" id="Brandid" value={this.state.brandid} onChange={this.brandidChange.bind(this)}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Types"
                    hasFeedback
                >
                    <Input placeholder="I'm the types" id="Types" value={this.state.types} onChange={this.typesChange.bind(this)}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Introduce"
                    hasFeedback
                >
                    <Input placeholder="I'm the introduce" id="Introduce" value={this.state.introduce} onChange={this.introduceChange.bind(this)}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Size"
                    hasFeedback
                >
                    <Input placeholder="I'm the size" id="Size" value={this.state.size} onChange={this.sizeChange.bind(this)}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Color"
                    hasFeedback
                >
                    <Input placeholder="I'm the color" id="Color" value={this.state.color} onChange={this.colorChange.bind(this)}/>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Iventory"
                    hasFeedback
                >
                    <Input placeholder="I'm the iventory" id="Iventory" value={this.state.iventory} onChange={this.iventoryChange.bind(this)}/>
                </FormItem>


                
                <Button.Group className="bianji"
                    style={{ marginLeft: "40%" }}>
                    <Button type="primary" onClick={this.save.bind(this)}>
                        <Icon type="enter" />保存
                    </Button>
                    <Button type="primary" onClick={this.back.bind(this)}>
                        返回<Icon type="rollback" />
                    </Button>
                </Button.Group>
                

            </Form>
            
        </div>
        )

    }
}

const mapToState = function (state) {
    console.log(state)
    return {
        data: state.datagrid.response
    }
}

export default connect(mapToState, DatagridAction)(goods_editComponent);