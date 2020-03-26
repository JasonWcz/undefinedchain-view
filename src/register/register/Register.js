import React, { Component } from "react";
import Top from "./Top";
import "./Register.css";
import Bottom from "./Bottom";

class Register extends Component {
    render() {
        return (
            <div id="register">
                <div id="block"></div>
                <Top />
                <Bottom />
            </div>
        )
    }
}

export default Register;