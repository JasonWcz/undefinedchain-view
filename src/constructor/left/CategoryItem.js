import React, { Component } from "react";
import OperationItem from "./OperationItem";

const arr = [ "金票业务", "待办事项", "用户中心" ];

class CategoryItem extends Component {

    constructor(props) {
        super(props);
        this.state = { flag : true };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return(
            <li key={this.props.order}>
                <div onClick={this.handleClick}>{arr[this.props.order]}</div>
                <OperationItem order={this.props.order} show={this.state.flag} />
            </li>
        );
    }

    handleClick() {
        this.setState(state => ({
            flag : !state.flag
        }));
    }
}

export default CategoryItem;