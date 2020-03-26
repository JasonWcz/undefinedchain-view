import React, { Component } from "react";
import $ from 'jquery';
import "./Info.css"

class Info extends Component {

    state = {
        condition: this.props.info.condition,
        showElem: false,
    };

    showReason = () => {
        if (this.state.condition == "已驳回"){
            this.setState({
                showElem: true
            });
        }
    };

    render() {

        $(document).ready(this.showReason);

        const {condition,showElem} = this.state;

        return(
            <div>
                <h3>金票信息</h3>
                <div className="out-border">
                    <table>
                        <tbody>
                        <tr>
                            <td className="t-left">原票编号：</td>
                            <td className="t-right">11223948101329424211102</td>
                            <td className="t-left">申请时间：</td>
                            <td className="t-right">2019-12-19</td>
                        </tr>
                        <tr>
                            <td className="t-left">原票金额：</td>
                            <td className="t-right">1000</td>
                            <td className="t-left">到期时间：</td>
                            <td className="t-right">2019-12-31</td>
                        </tr>
                        <tr>
                            <td className="t-left">开票企业：</td>
                            <td className="t-right">xxx建设公司</td>
                            <td className="t-left">持票企业：</td>
                            <td className="t-right">xxx施工公司</td>
                        </tr>
                        <tr>
                            <td className="t-left">保理商：</td>
                            <td className="t-right">xxx保理商</td>
                            <td className="t-left">操作人：</td>
                            <td className="t-right">张三</td>
                        </tr>
                        <tr>
                            <td className="t-left">备注：</td>
                            <td className="t-right">xxxxxx</td>
                            <td className="t-left">证明材料：</td>
                            <td className="t-right"><a download="xxx"
                                                       href="http://pcs.baidu.com/rest/2.0/pcs/file?method=download&path=%2F%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%2F%E5%85%B6%E4%BB%96%2F%E7%BC%96%E7%A8%8B%E5%AE%9D%E5%85%B8%2FHTML%2FHTML%E8%AF%AD%E8%A8%80%E4%BB%8E%E9%9B%B6%E5%88%B0%E7%B2%BE%E9%80%9A.pdf&app_id=778750">xxx.zip</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <table>
                        <tbody>
                        <tr>
                            <td className="t-left">金票编号：</td>
                            <td className="t-right">11223948101329424211222</td>
                            <td className="t-left">申请时间：</td>
                            <td className="t-right">2019-12-25</td>
                        </tr>
                        <tr>
                            <td className="t-left">金票金额：</td>
                            <td className="t-right">800</td>
                            <td className="t-left">到期时间：</td>
                            <td className="t-right">2019-12-31</td>
                        </tr>
                        <tr>
                            <td className="t-left">开票企业：</td>
                            <td className="t-right">xxx建设公司</td>
                            <td className="t-left">持票企业：</td>
                            <td className="t-right">xxx施工公司</td>
                        </tr>
                        <tr>
                            <td className="t-left">保理商：</td>
                            <td className="t-right">xxx保理商</td>
                            <td className="t-left">操作人：</td>
                            <td className="t-right">张三三三</td>
                        </tr>
                        <tr>
                            <td className="t-left">备注：</td>
                            <td className="t-right">xxxxxx</td>
                            <td className="t-left">转让进度：</td>
                            <td className="t-right">{condition}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h3>转让信息</h3>
                <div className="out-border">
                    <table>
                        <tbody>
                        <tr>
                            <td className="t-left">转让金额：</td>
                            <td className="t-right">800</td>
                            <td className="t-left">转让时间：</td>
                            <td className="t-right">2019-12-25</td>
                        </tr>
                        <tr>
                            <td className="t-left">转单企业：</td>
                            <td className="t-right">xxx施工公司</td>
                            <td className="t-left">收票企业：</td>
                            <td className="t-right">xxxx施工公司</td>
                        </tr>
                        <tr>
                            <td className="t-left">备注：</td>
                            <td className="t-right">xxxxxx</td>
                            <td className="t-left">证明材料：</td>
                            <td className="t-right"><a download="xxx"
                                                       href="http://pcs.baidu.com/rest/2.0/pcs/file?method=download&path=%2F%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%2F%E5%85%B6%E4%BB%96%2F%E7%BC%96%E7%A8%8B%E5%AE%9D%E5%85%B8%2FHTML%2FHTML%E8%AF%AD%E8%A8%80%E4%BB%8E%E9%9B%B6%E5%88%B0%E7%B2%BE%E9%80%9A.pdf&app_id=778750">xxx.zip</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div>
                        {
                            showElem?(
                                <div>
                                    <hr/>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className="t-left">驳回理由：</td>
                                            <td className="t-right">
                                                xxxxxxxxxx
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ):null
                        }
                    </div>
                </div>
            </div>
        );
    }

}

export default Info;