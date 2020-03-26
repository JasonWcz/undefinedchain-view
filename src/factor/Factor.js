import React, {Component} from "react";
import Top from "../top/Top.js";
import Left from "./left/Left.js";
import FactorRoute from "./FactorRoute";

class Factor extends Component {

    render() {
        return (
            <div className="app">
                <Top />
                <Left />
                <FactorRoute />
            </div>
        );
    }

}

export default Factor;
