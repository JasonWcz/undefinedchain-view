import React, {Component} from "react";
import Top from "../top/Top.js";
import Left from "./left/Left.js";
import ConstructorRoute from "./ConstructorRoute";

class Constructor extends Component {

    render() {
        return (
            <div className="app">
                <Top />
                <Left />
                <ConstructorRoute />
            </div>
        );
    }

}

export default Constructor;
