import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './../css/Login.css'

const Auth = {
	signIn(user, password) {
		if(user !== "camilo" || password !== "torres") {
			throw new Error("User is not registered. Click here to create a new account.");
		} else {
			localStorage.setItem('hasAuthenticated', true);
		}
	}
};

class Login extends React.Component {
	
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	constructor(props){
		super(props);
		this.state = {userAuthenticated: localStorage.getItem('hasAuthenticated') || false, user: '', pass: ''};
	}
	
	handleSubmit = async e => {
		e.preventDefault();
		try {
			await Auth.signIn(this.state.user, this.state.pass);
			this.props.history.push("/");
		} catch (e) {
			this.setState({user: '', pass: ''});
			alert(e.message);
		}
	}

	handleUserChange = async e => {
        this.setState({
            user: e.target.value
        });
    }

	handlePassChange = async e => {
        this.setState({
            pass: e.target.value
        });
	}

	handleSignUpClick = async e => {
		this.props.hisotry.push("/signup");
	}
	
    render(){		
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">Sign in</Typography>					
                        <form onSubmit={this.handleSubmit} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="user">Username</InputLabel>
                                <Input 
									id="user" 
									name="user" 
									autoComplete="user" 
									autoFocus 
									onChange={this.handleUserChange}
									value={this.state.user}
			                    />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
									onChange={this.handlePassChange}
			                        value={this.state.pass}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
						<Link to="/signup">Register for Free</Link>
                    </Paper>
                </main>
			</React.Fragment>
        );
    }

}

export default withRouter(Login)
