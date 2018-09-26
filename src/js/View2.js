import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class View1 extends React.Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	render () {
		return (
			<h3>Vista 2</h3>
		);
	}
}

export default withRouter(View1)