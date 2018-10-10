import React, { Component } from 'react';
import {withRouter, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

const Auth = {
	signOut () {
		sessionStorage.setItem('hasAuthenticated', false);
	}
};

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