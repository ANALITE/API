import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class View1 extends React.Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	handleBack = async e => {
		e.preventDefault();
		this.props.history.goBack();
	}
	
	render () {
		return (
			<div>
				<h3>Vista 1</h3>
				<button onClick={this.handleBack}>Back</button>
			</div>
		);
	}
}

export default withRouter(View1)