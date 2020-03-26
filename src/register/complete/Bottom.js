import React, { Component } from "react";
import MyStep from "./MyStep";
import MyForm from "./MyForm";
import "./Bottom.css"

class Bottom extends Component {

    render() {
        return(
            <div id="bottom">
                <MyStep />
                <MyForm />
            </div>
        );
    }

}

export default Bottom;