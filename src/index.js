import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import'react-mdl/extra/material.js';
import'react-mdl/extra/material.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
