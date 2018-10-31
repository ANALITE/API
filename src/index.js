import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "components/PrivateRoutes/PrivateRoute.jsx"

import "assets/css/material-dashboard-react.css?v=1.5.0";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
	<Switch>
		{indexRoutes.map((prop, key) => {
			if(prop.is_private) {
				return <PrivateRoute path={prop.path} component={prop.component} key={key} />;
			} else {
				return <Route path={prop.path} component={prop.component} key={key} />;
			}
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
