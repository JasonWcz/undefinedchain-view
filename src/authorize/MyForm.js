import React, { Component } from "react";
import "../right/Form.css"
import "./MyForm.css";

class MyForm extends Component {

    render() {
        return (
            <div id="MyForm">
                <form id="form">
                    <table>
                        <tbody>
                            <tr className="tag">
                                <td>提交文件</td>
                                <td className="line"></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>营业执照复印件：</td>
                                <td className="t-right"><input type="file" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>法人身份证复印件：</td>
                                <td className="t-right"><input type="file" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>管理员身份证复印件：</td>
                                <td className="t-right"><input type="file" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>委托授权书：</td>
                                <td className="t-right"><input type="file" /></td>
                            </tr>
                            <tr>
                                <td className="t-left"><span className="necessary">*&nbsp;</span>银行账户证明：</td>
                                <td className="t-right"><input type="file" /></td>
                            </tr>
                            <tr>
                                <td className="bottom">
                                    <input type="button" value="返回" id="back" />
                                    <input type="submit" value="提交" id="submit" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

}

export default MyForm;