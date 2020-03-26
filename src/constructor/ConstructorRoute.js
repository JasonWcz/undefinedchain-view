import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Detail0 from "./detail/kpsq/Right";
import Detail1 from "./detail/jprz/Right";
import Detail2 from "./detail/jpzr/Right";
import Application0 from "./application/kpsq/Right";
import Application1 from "./application/jprz/Right";
import Application2 from "./application/jpzr/Right";
import Form0 from "./forms/kpsq/Right";
import Form1 from "./forms/jprz-applying/Right";
import Form1_0 from "./forms/jprz-applyed/Right";
import Form2 from "./forms/jpzr-transferable/Right";
import Form2_0 from "./forms/jpzr-dismissed/Right";
import Form10 from "./forms/kpqs/Right";
import Form11 from "./forms/fkqs/Right";
import Form12 from "./forms/zrqs/Right";
import Form3 from "./retrieve/Right";
import IncInfo from "../userCenter/incInfo/IncInfo";
import Authorize from "../userCenter/authorize/Authorize";
// import {createBrowserHistory} from 'history';
// const customHistory = createBrowserHistory(); history={customHistory}
const ConstructorRoute = () => (
    <Router>
        <Switch>
            <Route exact path="/constructor/detail0/:id/:condition" component={Detail0} />
            <Route exact path="/constructor/detail1/:id/:condition" component={Detail1} />
            <Route exact path="/constructor/detail2/:id/:condition" component={Detail2} />
            <Route exact path="/constructor/form21" component={IncInfo} />
            <Route exact path="/constructor/form20" component={Authorize} />
            <Route exact path="/constructor/application0" component={Application0} />
            <Route exact path="/constructor/application1" component={Application1} />
            <Route exact path="/constructor/application2" component={Application2} />
            <Route exact path="/constructor/form0" component={Form0} />
            <Route exact path="/constructor/form1" component={Form1} />
            <Route exact path="/constructor/form1_0" component={Form1_0} />
            <Route exact path="/constructor/form2" component={Form2} />
            <Route exact path="/constructor/form2_0" component={Form2_0} />
            <Route exact path="/constructor/form3" component={Form3} />
            <Route exact path="/constructor/form10" component={Form10} />
            <Route exact path="/constructor/form11" component={Form11} />
            <Route exact path="/constructor/form12" component={Form12} />
        </Switch>
    </Router>
)
export default ConstructorRoute;