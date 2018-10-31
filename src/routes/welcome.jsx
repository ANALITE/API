import Login from 'views/Login/Login';
import Signup from 'views/Signup/Signup';

const welcomeRoutes = [
	{ 
	  path: "/login",
	  component: Login,
	  is_private: false
	},
	{ 
	  path: "/signup",
	  component: Signup,
	  is_private: false
	}
];

export default welcomeRoutes;
