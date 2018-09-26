import React, { Component } from 'react';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import logo from './../logo.svg';
import './../css/App.css';

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

const MainView = () => (
	<Main />
);

class App extends Component {
  render() {
    return (
		<BrowserRouter>
		  <div className="App">
			<header className="App-header">
			  <img src={logo} className="App-logo" alt="logo" />
			  <h1 className="App-title">ANALITE</h1>
			</header>
			<p className="App-intro">
				Welcome to Analite.
			</p>
			<Route path='/login' component={LoginView}/>
			<PrivateRoute exact path='/' component={MainView}/>
		  </div>
		</BrowserRouter>
    );
  }
}

export default App;
