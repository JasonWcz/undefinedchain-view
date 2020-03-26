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
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr className="tag">
                                <td>银行卡</td>
                                <td className="line"></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>银行账户名：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>银行账户：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>开户银行：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>所属支行：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <input type="button" value="返回" id="back" />
                            <input type="submit" value="提交" id="submit" />
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

}

export default MyForm;