import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
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

class Profile extends React.Component{

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

	constructor(props){
		super(props);
		this.state = {username: '', password: '', email: ''};
	}
	
	handleSubmit = async e => {
		e.preventDefault();
		if (!this.state.username.length || !this.state.password.length || !this.state.email)
			return;
		
		const newUser = {
			username: this.state.username,
			password: this.state.password,
			email: this.state.email
		};
		this.updateUser(newUser);
	}
	
	updateUser = (user) => {
		let self = this;
		axios.put('http://localhost:8080/user/' + sessionStorage.getItem('username'), user
		).then(function(response) {
			sessionStorage.setItem('username', self.state.username);
			self.props.history.push("/dashboard");
			console.log(response);
		}).catch(function(error) {
			console.log(error);
		});
	}
	
	handleEmailChange = async e => {
        this.setState({
            email: e.target.value
        });
	}
	
	handleUserChange = async e => {
        this.setState({
            username: e.target.value
        });
	}
	
	handlePassChange = async e => {
        this.setState({
            password: e.target.value
        });
	}
	
	handleBackClick = async e => {
		this.props.history.push('/');
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
                        <Typography variant="headline">Edit Profile</Typography>					
                        <form onSubmit={this.handleSubmit} className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input 
									id="username" 
									name="username" 
									autoComplete="username"
									autoFocus 
									onChange={this.handleUserChange}
									value={this.state.username}
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
			                        value={this.state.password}
                                />
                            </FormControl>
							<FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    name="email"
                                    type="email"
                                    id="email"
                                    autoComplete="email"
									onChange={this.handleEmailChange}
			                        value={this.state.email}
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
									Save
								</Button>
							</FormControl>
							<FormControl margin="normal">
								<Button
									fullWidth
									variant="raised"
									color="secondary"
									className="submit"
									onClick={this.handleBackClick}
								>
									Back
								</Button>
							</FormControl>
                        </form>
                    </Paper>
                </main>
			</React.Fragment>
        );
    }
}
export default withRouter(Profile);