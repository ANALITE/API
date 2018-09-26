import React, { Component } from 'react';
import {withRouter, Link, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
//import View1 from './View1';
//import View2 from './View2';
//import View3 from './View3';

const Auth = {
	signOut () {
		localStorage.setItem('hasAuthenticated', false);
	}
};

//const View1Comp = () => (
//	<View1/>
//);

//const View2Comp = () => (
//	<View2/>
//);

//const View3Comp = () => (
//	<View3/>
//);

class Main extends Component {

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	handleSignOut = async e => {
		await Auth.signOut();
		this.props.history.push("/login");
	}
	
	render () {
		return (
			<div>
				<h2>Views</h2>
				<ul>
					<li>
						<Link to='/v1'>View 1</Link>
					</li>
					<li>
						<Link to='/v2'>View 2</Link>
					</li>
					<li>
						<Link to='/v3'>view 3</Link>
					</li>
				</ul>
				<Route path='/v1' render={() => (
					<h1>View1</h1>
				)}/>
				<Route path='/v2' render={() => (
					<h2>View2</h2>
				)}/>
				<Route path='/v3' render={() => (
					<h3>View3</h3>
				)}/>
				<Route exact path='/'  render={() => (
					<div>
						<h3>Main</h3>
						<button onClick={this.handleSignOut}>Signout</button>
					</div>
				)}/>
			</div>
		);
	}
}

export default withRouter(Main)