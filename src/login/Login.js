import React, { Component } from "react";
import Identify from "./Identity";
import "./Login.css";
import {Link} from "react-router-dom";

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            phone: "",
            password: "",
        };
        this.onChange  = this.onChange.bind(this);
        this.handleClick  = this.handleClick.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    // componentWillMount() {
    //     var getInformation={
    //         method: "POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //    //    json格式转换
    //         body:JSON.stringify(User)
    //     }
    //     //注意: /login 对应于后台Controller层中的RequestMapping
    //     fetch("/login",getInformation).then(res=>{
    //         res.json()         ||对返回的数据进行解析
    //     }).then(json=>{
    //         返回的数据类型
    //         this.setState({
    //             mytext:json
    //         })
    //     })
    // }
    handleClick(e) {
        // 阻止事件传递
       e.preventDefault();
        // 把表单用的最终数据从state中提取出来,传入请求
        const post ={
            phone:this.state.phone,
            password:this.state.password
        }
        fetch('api/user/login',{
            // post提交
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(post)//把提交的内容转字符串
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
        }).catch()
    }
    render() {
        return (
            <div id="loginPage">
                <div id="logo">供应链金融</div>
                <div id="form">
                    <form >
                        <div id="head">账号登录</div>
                        <div id="accountRow">
                            <div className="border">
                                <span id="password">账号</span>
                                <input type="text" name="phone" placeholder="请输入手机号" onChange={this.onChange.bind(this)}/>
                            </div>
                        </div>
                        <div id="passwordRow">
                            <div className="border">
                                <span id="password">密码</span>
                                <input type="password" name="password" placeholder="请输入密码" onChange={this.onChange.bind(this)}/>
                            </div>
                        </div>
                        <div id="codeRow">
                            <input type="text" id="code" placeholder="请输入验证码" />
                            <Identify />
                        </div>
                    </form>
                    <button value="login" onClick={this.handleClick}><span>登陆</span></button>
                    <div id="login">
                        <Link to={"/register"} className="link">注册</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
