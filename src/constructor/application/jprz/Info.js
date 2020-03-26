import React, { Component } from "react";
import "./Info.css"

class Info extends Component {

    render() {
        return(
            <div>
                <h3>金票信息</h3>
                <div className="out-border">
                    <table>
                        <tbody>
                        <tr>
                            <td className="t-left">金票编号：</td>
                            <td className="t-right">11223948101329424211102</td>
                            <td className="t-left">申请时间：</td>
                            <td className="t-right">2019-12-19</td>
                        </tr>
                        <tr>
                            <td className="t-left">金票金额：</td>
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
                            <td className="t-left">开票进度：</td>
                            <td className="t-right">已签收</td>
                        </tr>
                        </tbody>
                    </table>
                    <hr/>
                    <table>
                        <tbody>
                        <tr>
                            <td className="t-left">证明材料：</td>
                            <td className="t-right"><a download="xxx"
                                                       href="http://pcs.baidu.com/rest/2.0/pcs/file?method=download&path=%2F%E6%88%91%E7%9A%84%E8%B5%84%E6%BA%90%2F%E5%85%B6%E4%BB%96%2F%E7%BC%96%E7%A8%8B%E5%AE%9D%E5%85%B8%2FHTML%2FHTML%E8%AF%AD%E8%A8%80%E4%BB%8E%E9%9B%B6%E5%88%B0%E7%B2%BE%E9%80%9A.pdf&app_id=778750">xxx.zip</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default Info;