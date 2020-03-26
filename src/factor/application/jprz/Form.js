import React, { Component } from "react";
import "../../../right/Form.css"

class Form extends Component {

    render() {
        return(
            <div id="form">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td className="t-left">放款账号：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">放款银行：</td>
                                <td className="t-right"><input type="text" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">操作人：</td>
                                <td className="t-right">王五</td>
                            </tr>
                            <tr>
                                <td className="t-left">备注：</td>
                                <td className="t-right"><textarea id="remark"></textarea></td>
                            </tr>
                            <tr>
                                <td className="t-left">放款凭证：</td>
                                <td className="t-right"><input type="file" id="certificate" /></td>
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

export default Form;