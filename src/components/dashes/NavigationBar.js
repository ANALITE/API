import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class NavigationBar extends Component {
	
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <i className="material-icons md-light">dashboard</i><Link className="navbar-brand ml-3 pt-2" to='/dashboard'>Dashboard</Link>
		<i className="material-icons md-light">lock</i><Link className="navbar-brand ml-3 pt-2" to='/'>Logout</Link>
		<i className="material-icons md-light">face</i><Link className="navbar-brand ml-3 pt-2" to="/profile">Profile</Link>
      </nav>
    )
  }
}

export default NavigationBar
