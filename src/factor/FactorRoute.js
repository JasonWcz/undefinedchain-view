import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Detail0 from "./detail/kpsq/Right";
import Detail1 from "./detail/jprz/Right";
import Application0 from "./application/jprz/Right";
import Form0 from "./forms/kpsq/Right";
import Form1 from "./forms/jprz/Right";
import Form10 from "./forms/kpsh/Right";
import Form11 from "./forms/rzsh/Right";
import Form12 from "./forms/rzfk/Right";
import Form2 from "./retrieve/Right";
import IncInfo from "../userCenter/incInfo/IncInfo";
import Authorize from "../userCenter/authorize/Authorize";
// import {createBrowserHistory} from 'history';
// const customHistory = createBrowserHistory(); history={customHistory}
const FactorRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/factor/detail0/:id/:condition" component={Detail0} />
            <Route exact path="/factor/detail1/:id/:condition" component={Detail1} />
            <Route exact path="/factor/application0" component={Application0} />
            <Route exact path="/factor/form0" component={Form0} />
            <Route exact path="/factor/form1" component={Form1} />
            <Route exact path="/factor/form10" component={Form10} />
            <Route exact path="/factor/form11" component={Form11} />
            <Route exact path="/factor/form12" component={Form12} />
            <Route exact path="/factor/form2" component={Form2} />
            <Route exact path="/factor/form21" component={IncInfo} />
            <Route exact path="/factor/form20" component={Authorize} />
        </Switch>
    </Router>
)
export default FactorRoute;