import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';

import Users from './user/pages/Users';
import NewPlace from './place/pages/NewPlace';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Users />
				</Route>

				<Route path="/places/new" exact>
					<NewPlace  />
				</Route>

				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
		);
}

export default App;
