import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
