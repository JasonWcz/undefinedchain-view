import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Detail0 from "./detail/kpsq/Right";
import Form0 from "./forms/kpsq/Right";
import Form10 from "./forms/kpsh/Right";
import Form1 from "./retrieve/Right";
import IncInfo from "../userCenter/incInfo/IncInfo";
import Authorize from "../userCenter/authorize/Authorize";
// import {createBrowserHistory} from 'history';
// const customHistory = createBrowserHistory(); history={customHistory}
const ConstructorRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/builder/detail0/:id/:condition" component={Detail0} />
            <Route exact path="/builder/form0" component={Form0} />
            <Route exact path="/builder/form10" component={Form10} />
            <Route exact path="/builder/form1" component={Form1} />
            <Route exact path="/builder/detail10" component={Detail0} />
            <Route exact path="/builder/form20" component={Authorize} />
            <Route exact path="/builder/form21" component={IncInfo} />
        </Switch>
    </Router>
)
export default ConstructorRoute;