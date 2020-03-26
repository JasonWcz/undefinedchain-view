import React, {Component} from "react";
import Top from "../top/Top.js";
import Left from "./left/Left.js";
import BuilderRoute from "./BuilderRoute";

class Builder extends Component {

    render() {
        return (
            <div className="app">
                <Top />
                <Left />
                <BuilderRoute />
            </div>
        );
    }

}

export default Builder;
