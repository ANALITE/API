import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Login extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {userAuthenticated: sessionStorage.getItem('hasAuthenticated') || false, user: '', pass: ''};
	}
	
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	
	signIn (user){
		let self = this;
		axios.post('http://localhost:8080/user/login', user
		).then(function(response) {
			sessionStorage.setItem('hasAuthenticated', true);
			sessionStorage.setItem('username',self.state.user)
			sessionStorage.setItem('accessToken', response.data.accessToken)
			self.props.history.push('/');
		}).catch(function(error) {
			alert.log(error.msg);
		});
	}
	
	handleSubmit = async e => {
		e.preventDefault();
		try {
			let userlog = {username: this.state.user, password: this.state.pass, email: ""};
			await this.signIn(userlog);
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
		e.preventDefault();
		this.props.history.push('/signup');
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
							<FormControl margin="normal">
								<Button
									type="submit"
									fullWidth
									variant="raised"
									color="primary"
									className="submit"
								>
									Sign in
								</Button>
							</FormControl>
							<FormControl margin="normal">
								<Button
									fullWidth
									variant="raised"
									color="secondary"
									onClick={this.handleSignUpClick}
								>
									Sign Up
								</Button>
							</FormControl>
                        </form>
                    </Paper>
                </main>
			</React.Fragment>
        );
    }

}

export default withRouter(Login)
