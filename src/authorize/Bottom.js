import React, { Component } from "react";
import MyForm from "./MyForm";
import "./Bottom.css"

class Bottom extends Component {

    render() {
        return(
            <div id="bottom2">
                <div id="block2"></div>
                <MyForm />
            </div>
        );
    }

}

export default Bottom;