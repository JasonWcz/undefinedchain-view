import React, { Component } from "react";
import "../../left/Left.css"
import CategoryItem from "./CategoryItem";

class Left extends Component {

    render() {
        return (
            <div id="nav">
                <ul>
                    <CategoryItem order="0" />
                    <CategoryItem order="1" />
                    <CategoryItem order="2" />
                </ul>
            </div>
        );
    }

}

export default Left;