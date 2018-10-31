import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
		sessionStorage.getItem('hasAuthenticated') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/analite', state: { from: props.location } }}/>
      )
    }
  />
);

export default PrivateRoute;