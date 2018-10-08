import React, { Component } from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import Dashboard from './views/Dashboard';
import InfoBar from "./dashes/InfoBar";
import logo from '../img/logo.svg';

import '../css/App.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
		localStorage.getItem('hasAuthenticated') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
      )
    }
  />
);

const LoginView = () => (
	<Login />
);

const SignupView = () => (
	<Signup />
);

const MainView = () => (
	<Main />
);

const DashboardView = () => (
    <Dashboard />
);

class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">ANALITE</h1>
            </header>
            <BrowserRouter>
                <div>
                    <Route path='/login' component={LoginView}/>
					<Route path='/signup' component={SignupView}/>
                    <PrivateRoute exact path='/' component={MainView}/>
                    <PrivateRoute path='/dashboard' component={DashboardView}/>
                </div>
            </BrowserRouter>
            <InfoBar/>
        </div>

    );
  }
}

export default App;
