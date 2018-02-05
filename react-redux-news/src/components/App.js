import React, { Component } from 'react';
// step 5 : import route
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// step 7 : load home
import Home from '../containers/home';
class App extends Component {
  render() {
    return (
		// step 6 : setup route
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
    );
  }
}

export default App;
