import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';

function Routes() {
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/favorites" component={Favorites} />
				<Redirect to="/" />
			</Switch>
		</div>
	);
}

export default Routes;
