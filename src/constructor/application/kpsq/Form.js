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
                                <td className="t-left">开票企业：</td>
                                <td className="t-right"><input type="text" placeholder="xxx建设企业" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">保理商：</td>
                                <td className="t-right"><input type="text" placeholder="xxx保理商" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">到期时间：</td>
                                <td className="t-right"><input type="date" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">金票金额：</td>
                                <td className="t-right"><input type="text" placeholder="元" /></td>
                            </tr>
                            <tr>
                                <td className="t-left">操作人：</td>
                                <td className="t-right">张三</td>
                            </tr>
                            <tr>
                                <td className="t-left">备注：</td>
                                <td className="t-right"><textarea id="remark"></textarea></td>
                            </tr>
                            <tr>
                                <td className="t-left">证明材料：</td>
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