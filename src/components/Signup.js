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

class Signup extends React.Component{

	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

	constructor(props){
		super(props);
		this.state = {user: '', password: '', email: ''};
	}
	
	handleSubmit = async e => {
		e.preventDefault();
		if (!this.state.user.length || !this.state.password.length || !this.state.email)
			return;
		
		const newUser = {
			user: this.state.user,
			password: this.state.password,
			email: this.state.email
		};
		this.postUser(newUser);
	}
	
	postUser = (user) => {
		let self = this;
		axios.post('http://localhost:8080/user/', user
		).then(function(response) {
			self.props.history.push("/login");
		}).catch(function(error) {
			alert.log(error.msg);
		});
	}
	
	handleEmailChange = async e => {
        this.setState({
            email: e.target.value
        });
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
	
	handleBackClick = async e => {
		this.props.history.push('/login');
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
									Sign up
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
export default withRouter(Signup);
