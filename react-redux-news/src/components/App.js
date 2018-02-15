import React, { Component } from 'react';
// step 5 : import route
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* COMPONENTS */
// step 8 : load header and footer
import Header from './header';
import Footer from './footer';

/* CONTAINERS */
// step 7 : load home
import Home from '../containers/home';
import News from '../containers/news';
import GalleryItem from '../containers/galleryitem'

class App extends Component {
  render() {
    return (
		// step 6 : setup route
		<BrowserRouter>
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/news/:id" component={News} />
					<Route path="/galleries/:id" component={GalleryItem} />
				</Switch>
				<Footer/>
			</div>
		</BrowserRouter>
    );
  }
}

export default App;
