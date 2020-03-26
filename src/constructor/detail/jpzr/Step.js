import React, {Component} from "react";
import $ from 'jquery';
import {Steps, Modal, Button} from "antd";
import "./Step.css"

const loginId = '张四';

class Step extends Component {

    state = {
        loading: false,
        visible: false,
        showElem:false,
        condition: this.props.step.condition,
    };

    showButton = () => {
        if (this.state.condition == "待签收" && loginId == '张四'){
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
            description: '日期：2019-12-25         操作人：xxx施工公司 —— 张三'
        }, {
            title: '转让待签收'
        }, {
            title: '转让已签收',
            description: '日期：2019-12-22         操作人：xxx施工公司 —— 张四',
        }, {
            title: '转让申请已驳回',
            description: '日期：2019-12-22         操作人：xxx施工公司 —— 张四',
            status: "error"
        }];

        const tmp = [steps[0]];

        switch (condition) {
            case "待签收":
                tmp.push(steps[1]);
                break;
            case "已签收":
                tmp.push(steps[2]);
                break;
            default:
                tmp.push(steps[3]);
        }

        const step = tmp.map((s, i) => <Step key={i} title={s.title} description={s.description} status={s.status}/>);

        return (
            <div>
                <h3>转让进度</h3>
                <div className="out-border">
                    <div className="step">
                        <Steps size="small" direction="vertical" current={1}>{step}</Steps>
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