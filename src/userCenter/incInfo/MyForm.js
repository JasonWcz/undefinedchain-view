import React, { Component } from "react";
import "../../right/Form.css"
import "./MyForm.css";

class MyForm extends Component {

    render() {
        return (
            <div id="MyForm">
                <form id="form">
                    <table>
                        <tbody>
                            <tr className="tag">
                                <td>企业用户</td>
                                <td className="line"></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>企业名称：</td>
                                <td className="t-right"><input type="text" defaultValue="××企业" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>注册类型：</td>
                                <td className="t-right">
                                    <select>
                                        <option>建设方</option>
                                        <option>保理商</option>
                                        <option>施工方</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>管理员姓名：</td>
                                <td className="t-right"><input type="text" defaultValue="张三" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>管理员身份证号：</td>
                                <td className="t-right"><input type="text" defaultValue="1234567890" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>法人代表姓名：</td>
                                <td className="t-right"><input type="text" defaultValue="李四" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>法人身份证号：</td>
                                <td className="t-right"><input type="text" defaultValue="0987654321" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>证件类型：</td>
                                <td className="t-right">
                                    <select>
                                        <option>统一社会信用代码</option>
                                        <option>组织机构代码</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>证件码：</td>
                                <td className="t-right"><input type="text" defaultValue="6666666666" /></td>
                            </tr>
                            <tr className="tag">
                                <td>银行账户</td>
                                <td className="line"></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>银行账户名：</td>
                                <td className="t-right"><input type="text" defaultValue="lisi6666666" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>银行账户：</td>
                                <td className="t-right"><input type="text" defaultValue="123123123123" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>开户银行：</td>
                                <td className="t-right"><input type="text" defaultValue="××银行" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>所属支行：</td>
                                <td className="t-right"><input type="text" defaultValue="÷÷银行" /></td>
                            </tr>
                            <input type="button" value="返回" id="back" />
                            <input type="submit" value="修改" id="submit" />
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

}

export default MyForm;