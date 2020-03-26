import React, { Component } from "react";
import Top from "./Top";
import "./Complete.css";
import Bottom from "./Bottom";

class Complete extends Component {
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

export default Complete;