import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import "./Form.css"

class Form extends Component {

    routeTo(id,condition) {
        this.props.history.push({pathname: '/constructor/detail1/'+id+'/'+condition})
    }

    render() {
        return(
            <div id="jpyw_form">

                <header>
                    <form action="#" class="jpsearch">
                        <span class='icon_search'></span>
                        <input type="search" placeholder="输入金票编号" class="jpvalue"/>
                    </form>
                </header>

                    <table class="jpyw_table">
                        <thead>
                            <tr>
                                <th>金票编号</th>
                                <th>开票企业</th>
                                <th>保理商</th>
                                <th>到期时间</th>
                                <th>融资时间</th>
                                <th>融资金额</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11223948101329424211102</td>
                                <td>xxx建设企业</td>
                                <td>xxx</td>
                                <td>2019-12-19</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td>待受理</td>
                                <td><a onClick={()=>this.routeTo('11223948101329424211102','待受理')}>详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211103</td>
                                <td>xxx建设企业</td>
                                <td>xxx</td>
                                <td>2019-12-19</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td>待放款</td>
                                <td><a onClick={()=>this.routeTo('11223948101329424211103','待放款')}>详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211104</td>
                                <td>xxx建设企业</td>
                                <td>xxx</td>
                                <td>2019-12-19</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td>待收款</td>
                                <td><a onClick={()=>this.routeTo('11223948101329424211104','待收款')}>详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211105</td>
                                <td>xxx建设企业</td>
                                <td>xxx</td>
                                <td>2019-12-19</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td>收款驳回</td>
                                <td><a onClick={()=>this.routeTo('11223948101329424211105','收款驳回')}>详情</a></td>
                            </tr>
                            <tr>
                                <td>11223948101329424211105</td>
                                <td>xxx建设企业</td>
                                <td>xxx</td>
                                <td>2019-12-19</td>
                                <td>2019-12-31</td>
                                <td>100000</td>
                                <td>申请驳回</td>
                                <td><a onClick={()=>this.routeTo('11223948101329424211106','申请驳回')}>详情</a></td>
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