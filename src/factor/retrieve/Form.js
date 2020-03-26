import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import imgURL from './timg.jpg';
import "./Form.css"

const kpsq = ['待初审','待复审','待签收','已驳回','已签收'];
const jprz = ['待受理','待放款','待收款','申请驳回','收款驳回','已收款'];
const kpsq1 = ['申请待初审','申请待复审','申请已驳回','申请待签收','申请成功'];
const jprz1 = ['融资待受理','融资已受理','融资已驳回','放款待签收','放款已驳回','融资成功'];

class Form extends Component {

    translateTo(id,select){
        let condition = '';
        if(kpsq1.indexOf(select) != -1){
            if(select == '申请成功') condition = '已签收';
            else condition = select.substr(2,3);
        }
        else {
            switch (select) {
                case '融资待受理':
                    condition = '待受理';
                    break;
                case '融资已受理':
                    condition = '待放款';
                    break;
                case '融资已驳回':
                    condition = '申请驳回';
                    break;
                case '放款待签收':
                    condition = '待收款';
                    break;
                case '放款已驳回':
                    condition = '收款驳回';
                    break;
                default:
                    condition = '已收款';
            }
        }
        this.routeTo(id,condition);
    }

    routeTo(id,condition) {
        if(kpsq.indexOf(condition) != -1) {
            this.props.history.push({pathname: '/factor/detail0/'+id+'/'+condition})
        }
        else this.props.history.push({pathname: '/factor/detail1/'+id+'/'+condition})
    }

    render() {
        return(
            <div id="jpyw_form">

                <header id="header1">
                    <form action="#" id="jpselect">
                        <span>金票状态：</span>
                        <select>
                            <option value ="请选择">请选择</option>
                            <option value ="申请待初审">申请待初审</option>
                            <option value ="申请待复审">申请待复审</option>
                            <option value ="申请已驳回">申请已驳回</option>
                            <option value ="申请待签收">申请待签收</option>
                            <option value ="申请成功">申请成功</option>
                            <option value ="融资待受理">融资待受理</option>
                            <option value ="融资已受理">融资已受理</option>
                            <option value ="融资已驳回">融资已驳回</option>
                            <option value ="放款待签收">放款待签收</option>
                            <option value ="放款已驳回">放款已驳回</option>
                            <option value ="融资成功">融资成功</option>
                        </select>
                        <span>开票企业：</span>
                        <select>
                            <option value ="请选择">请选择</option>
                        </select>
                        <span>开票时间：</span>
                        <input type="date" value="2019-09-24"/>
                        <span>到期时间：</span>
                        <input type="date" value="2019-09-24"/>
                        <span>金票类型：</span>
                        <select>
                            <option value ="请选择">请选择</option>
                        </select>
                    </form>
                    <form action="#" id="jpsearch1">
                        <img src={imgURL} id='icon1'/>
                        <input type="search" placeholder="输入金票编号" id="jpvalue1"/>
                    </form>
                    <button type="button" id="apply1">查询</button>
                </header>

                    <table class="jpyw_table">
                        <thead>
                            <tr>
                                <th>金票编号</th>
                                <th>开票企业</th>
                                <th>到期时间</th>
                                <th>金额</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11223948101329424211102</td>
                                <td>xxx建设企业</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td><a onClick={()=>this.translateTo('11223948101329424211102','申请待复审')}>详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211103</td>
                                <td>xxx建设企业</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td><a onClick={()=>this.translateTo('11223948101329424211103','申请已驳回')}>详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211104</td>
                                <td>xxx建设企业</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td><a onClick={()=>this.translateTo('11223948101329424211104','融资已受理')}>详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211105</td>
                                <td>xxx建设企业</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td><a onClick={()=>this.translateTo('11223948101329424211105','融资成功')}>详情</a></td>
                            </tr>
                        </tbody>
                    </table>

                <div class="bottom">
                    <div class="pagenum">
                        <span>共</span>
                        <span class="total">100</span>
                        <span>条</span>
                    </div>
                    <ul class="page"> 
                        <li><a href="#">&lt;</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li class="symbol">...</li>
                        <li><a href="#">50</a></li>
                        <li><a href="#">&gt;</a></li>
                    </ul>
                    <span class="word">前往</span>
                    <input type="search" placeholder="8" class="search_page"/>
                </div>
            </div>
        );
    }

}

export default withRouter(Form);