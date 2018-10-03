const AxiosInstance = undefined;

const AxiosInit = (accessToken) => {
	AxiosInstance = axios.create({
        baseURL: 'http://localhost:8080/api',
        timeout: 1000,
        headers: {'Authorization': 'Bearer '+ accessToken}
	});
};

class Signup extends React.Component{
	constructor(props){
		super(props);
		this.state = {user: '', password: '', email: ''};
		AxiosInit(props.accessToken);
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
		AxiosInstance.post('/user', user
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
			                        value={this.email.pass}
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
                    </Paper>
                </main>
			</React.Fragment>
        );
    }
}