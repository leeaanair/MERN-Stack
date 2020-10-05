import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Users from './user/pages/Users';
import NewPlace from './place/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './place/pages/UserPlaces';

const App = () => {
	return (
		<BrowserRouter>
			<MainNavigation />
			<main>
			<Switch>
				<Route path="/" exact>
					<Users />
				</Route>

				<Route path="/:userId/places" exact>
					<UserPlaces  />
				</Route>

				<Route path="/places/new" exact>
					<NewPlace  />
				</Route>

				<Redirect to="/" />
			</Switch>
			</main>
		</BrowserRouter>
		);
}

export default App;
   