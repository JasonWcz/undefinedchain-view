import React, { Component } from "react";
import Head from "./Head.js"
import "../../../right/Right.css"
import Step from "./Step";
import Info from "./Info";

class Right extends Component {

    render() {

        const id = this.props.match.params.id;
        const condition = this.props.match.params.condition;

        const step = {
            condition:condition,
        };

        const info = {
            id:'',
            time:'',
            money:null,
            condition:condition,
        };

        return(
            <div id="right">
                <Head />
                <Step step={step}/>
                <Info info={info}/>
            </div>
        )
    }

}

export default Right;