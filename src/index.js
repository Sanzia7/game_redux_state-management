import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReduxRenderer } from './redux-manager';
import { store } from './store'
import { Game } from './Game';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ReduxRenderer store={store}>
		<Game />
	</ReduxRenderer>,
);
