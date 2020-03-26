import React, { Component } from "react";
import "./Top.css";
import {Link} from "react-router-dom";

class Top extends Component {

    render() {
        return (
            <div id="registerTop">
                供应链金融&nbsp;&nbsp;|&nbsp;&nbsp;注册
                <Link to={"/login"} id="toLogin">
                    我已注册，马上登录&nbsp;>
                </Link>
            </div>
        );
    }

}

export default Top;