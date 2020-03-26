import React, { Component } from "react";
import Head from "./Head.js"
import "../../right/Right.css"
import Form from "./Form";

class Right extends Component {

    render() {
        return(
            <div id="right">
                <Head />
                <Form />
            </div>
        )
    }

}

export default Right;