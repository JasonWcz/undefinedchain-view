import React, {Component} from "react";
import $ from 'jquery';
import {Steps} from "antd";
import "./Step.css"

class Step extends Component {

    state = {
        showElem1: false,
        showElem2:false,
        condition: this.props.step.condition,
    };

    showButton = () => {
        if (this.state.condition == "已驳回"){
            this.setState({
                showElem1: true
            });
        }
        if (this.state.condition == "待签收"){
            this.setState({
                showElem2: true
            });
        }
    };

    render() {

        $(document).ready(this.showButton);

        const {showElem1, showElem2, condition} = this.state;

        const Step = Steps.Step;

        const steps = [{
            title: '申请提交成功',
            description: '日期：2019-12-19         操作人：xxx施工公司 —— 张三',
        }, {
            title: '金票待初审',
        }, {
            title: '初审通过',
            description: '日期：2019-12-20         操作人：xxx建设公司 —— 李四'
        }, {
            title: '金票待复审',
        }, {
            title: '复审通过',
            description: '日期：2019-12-21         操作人：xxx保理商 —— 王五'
        }, {
            title: '金票待签收',
        }, {
            title: '金票已签收',
            description: '日期：2019-12-22         操作人：xxx施工公司 —— 张三',
        }, {
            title: '申请已驳回',
            description: '日期：2019-12-22         操作人：xxx保理商 —— 王五',
            status: "error"
        }];

        const tmp = [];
        let chooseStep;

        switch (condition) {
            case "待初审":
                chooseStep = [0,1];
                break;
            case "待复审":
                chooseStep = [0,2,3];
                break;
            case "待签收":
                chooseStep = [0,2,4,5];
                break;
            case "已签收":
                chooseStep = [0,2,4,6];
                break;
            default:
                chooseStep = [0,7];
                break;
        }

        for(let i of chooseStep){
            tmp.push(steps[i]);
        }

        const step = tmp.map((s, i) => <Step key={i} title={s.title} description={s.description} status={s.status}/>);

        return (
            <div>
                <h3>开票进度</h3>
                <div className="out-border">
                    <div className="step">
                        <Steps size="small" direction="vertical" current={chooseStep.length-1}>{step}</Steps>
                    </div>
                    <div>
                        {
                            showElem1?(
                                <div>
                                    <input type="button" value="重新申请" className="again" />
                                </div>
                            ):null
                        }
                        {
                            showElem2?(
                                <div>
                                    <input type="button" value="签收" className="sign" />
                                </div>
                            ):null
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default Step;