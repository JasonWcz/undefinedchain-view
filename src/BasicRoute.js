import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Constructor from "./constructor/Constructor";
import Builder from "./builder/Builder";
import Factor from "./factor/Factor";
import Login from "./login/Login";
import Register from "./register/register/Register";
import Complete from "./register/complete/Complete";
import Authorize from "./authorize/Authorize";
// import {createBrowserHistory} from 'history';
// const customHistory = createBrowserHistory(); history={customHistory}
const BasicRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/complete" component={Complete} />
            <Route exact path="/authorize" component={Authorize} />
            <Route path="/constructor" component={Constructor} />
            <Route path="/builder" component={Builder} />
            <Route path="/factor" component={Factor} />
        </Switch>
    </Router>
)
export default BasicRoute;