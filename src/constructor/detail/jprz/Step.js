import React, {Component} from "react";
import $ from 'jquery';
import {Steps, Modal, Button} from "antd";
import "./Step.css"

class Step extends Component {

    state = {
        loading: false,
        visible: false,
        showElem: false,
        condition: this.props.step.condition,
    };

    showButton = () => {
        if (this.state.condition == "待收款"){
            this.setState({
                showElem: true
            });
        }
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 1500);
    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    render() {

        $(document).ready(this.showButton);

        const {visible, loading, showElem, condition} = this.state;

        const Step = Steps.Step;

        const steps = [{
            title: '申请提交成功',
            description: '日期：2019-12-19         操作人：xxx施工公司 —— 张三',
        }, {
            title: '融资待受理',
        }, {
            title: '融资已受理',
            description: '日期：2019-12-20         操作人：xxx保理商 —— 王五'
        }, {
            title: '待放款',
        }, {
            title: '已放款',
            description: '日期：2019-12-21         操作人：xxx保理商 —— 王五'
        }, {
            title: '待收款',
        }, {
            title: '已收款',
            description: '日期：2019-12-22         操作人：xxx施工公司 —— 张三'
        }, {
            title: '收款已驳回',
            description: '日期：2019-12-22         操作人：xxx施工公司 —— 张三',
            status: "error"
        }, {
            title: '融资申请已驳回',
            description: '日期：2019-12-22         操作人：xxx保理商 —— 王五',
            status: "error"
        }];

        const tmp = [];
        let chooseStep;

        switch (condition) {
            case "待受理":
                chooseStep = [0,1];
                break;
            case "待放款":
                chooseStep = [0,2,3];
                break;
            case "待收款":
                chooseStep = [0,2,4,5];
                break;
            case "收款驳回":
                chooseStep = [0,2,4,7];
                break;
            case "申请驳回":
                chooseStep = [0,8];
                break;
            default:
                chooseStep = [0,2,4,6];
        }

        for(let i of chooseStep){
            tmp.push(steps[i]);
        }

        const step = tmp.map((s, i) => <Step key={i} title={s.title} description={s.description} status={s.status}/>);

        return (
            <div>
                <h3>融资进度</h3>
                <div className="out-border">
                    <div className="step">
                        <Steps size="small" direction="vertical" current={chooseStep.length-1}>{step}</Steps>
                    </div>
                    <div>
                        {
                            showElem?(
                                <div>
                                    <input type="button" value="驳回" className="reject" onClick={this.showModal}/>
                                    <input type="button" value="签收" className="pass"/>
                                </div>
                            ):null
                        }
                    </div>

                    <Modal
                        visible={visible}
                        title="驳回理由"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>
                                返回
                            </Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                提交
                            </Button>,
                        ]}
                    >
                        <textarea placeholder="请在此输入驳回理由" className="reason"/>
                    </Modal>

                </div>
            </div>
        );
    }

}

export default Step;