import React, { Component } from "react";
import { Steps } from 'antd';
import "antd/es/steps/style/css";
import "./MyStep.css"

const { Step } = Steps;

class MyStep extends Component {

    render() {
        return(
            <div id="steps">
                <Steps current={0}>
                    <Step status="process" title="创建用户" />
                    <Step status="wait" title="完善基础" />
                    <Step status="wait" title="注册成功" />
                </Steps>
            </div>
        );
    }

}

export default MyStep;