import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import'react-mdl/extra/material.js';
import'react-mdl/extra/material.css';
import App from './App';
//import ModalSwitch from './ModalSwitch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
