import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import LoadingScreen from "components/LoadingSpinner";
import LayoutContainer from "components/LayoutContainer";

import { DASHBOARD, NAVIGATION_PATH } from "constants/navigationPath";

//stylesheets
import "./App.scss";

//components
const Dashboard = lazy(() =>
  import(/* webpackChunkName: 'Dashboard' */ "modules/Dashboard/index")
);

const App = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Router>
        <Switch>
          <LayoutContainer
            path={NAVIGATION_PATH[DASHBOARD].path}
            component={Dashboard}
          />
          <Redirect to={NAVIGATION_PATH[DASHBOARD].path} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
