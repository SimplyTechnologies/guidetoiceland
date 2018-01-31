import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Routes } from 'router';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';

function renderRoot(Root) {
	render(
		<AppContainer>
			{Routes}
		</AppContainer>,
		document.getElementById('root')
	);	
}

if (module.hot) {
	module.hot.accept('./router/index.js', () => {
		render(require('./router').default);
	});
}

renderRoot(Routes);
