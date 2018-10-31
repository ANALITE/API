import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Analite from "layouts/Analite/Analite.jsx";

const indexRoutes = [
	{ 
	  path: "/",
	  component: Dashboard,
	  is_private: false
	},
	{ 
	  path: "/analite",
	  component: Analite,
	}
];

export default indexRoutes;
