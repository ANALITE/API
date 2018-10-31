import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from "components/Footer/Footer.jsx";
import logo from 'assets/img/logo.svg';
import welcomeRoutes from "routes/welcome.jsx"
import PerfectScrollbar from "perfect-scrollbar";
import PropTypes from "prop-types";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "assets/css/App.css"

const switchRoutes = (
	<Switch>
		{welcomeRoutes.map((prop, key) => {
			return <Route path={prop.path} component={prop.component} key={key} />;
		})}
	</Switch>
);

class Analite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileOpen: false
		};
		this.resizeFunction = this.resizeFunction.bind(this);
	}
	
	handleDrawerToggle = () => {
		this.setState({ mobileOpen: !this.state.mobileOpen });
	};
	getRoute() {
		return this.props.location.pathname !== "/maps";
	}
	resizeFunction() {
		if (window.innerWidth >= 960) {
			this.setState({ mobileOpen: false });
		}
	}
  
	componentDidMount() {
		window.addEventListener("resize", this.resizeFunction);
	}
	componentDidUpdate(e) {
		if (e.history.location.pathname !== e.location.pathname) {
			this.refs.mainPanel.scrollTop = 0;
			if (this.state.mobileOpen) {
				this.setState({ mobileOpen: false });
			}
		}
	}
  
	componentWillUnmount() {
		window.removeEventListener("resize", this.resizeFunction);
	}
  
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">ANALITE</h1>
				</header>
				<div className={classes.content}>
					<div className={classes.container}>{switchRoutes}</div>
				</div>
				<Footer/>
			</div>
		);
	}
}
Analite.propTypes = {
  classes: PropTypes.object.isRequired
};
export default Analite;
