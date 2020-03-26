import React, { Component } from "react";
import "./Top.css";
import Profile from "./Profile.js";

class Top extends Component {

    render() {
        return (
            <div id="top">
                供应链金融
                <Profile />
            </div>
        );
    }

}

export default Top;