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
                                <td className="t-right"><input type="text" /></td>
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
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>管理员身份证号：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>法人代表姓名：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>法人身份证号：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>通讯地址：</td>
                                <td className="t-right"><input type="text" placeholder="请准确填写详细地址" /></td>
                            </tr>
                            <tr className="tag">
                                <td>登陆密码</td>
                                <td className="line"></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>管理员手机号：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>设置密码：</td>
                                <td className="t-right"><input type="password" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>确认密码：</td>
                                <td className="t-right"><input type="password" /></td>
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