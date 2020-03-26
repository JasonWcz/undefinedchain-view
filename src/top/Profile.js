import React, { Component } from 'react';
import "./Profile.css"

class Profile extends Component {

    render() {
        return (
            <div id="profile">
                <a id="avatar" href="localhost:3000"><img src="./avatar.gif" alt="avatar" /></a>
                <span id="username">用户名</span>
                <span id="role">角色</span>
            </div>
        );
    }

}

export default Profile;