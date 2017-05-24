import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/Dashboard.jsx';

let json = require('./output.json');

const rootEl = document.getElementById('main');
ReactDOM.render(
		<Dashboard data={json} style={{
			height: '100px',
			width: '100px'
		}}/>,
		rootEl
);

