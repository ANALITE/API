import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class View3 extends React.Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	render () {
		return (
			<h3>Vista 3</h3>
		);
	}
}

export default withRouter(View3)