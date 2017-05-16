import React from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { HashRouter as Router,
				 Route,
				 NavLink } from 'react-router-dom';
import NavBar from './nav_bar'
import Footer from './footer';
import Home from './home';


injectTapEventPlugin();

const Root = ({ store }) => {
  return(
	  	<div>
		  <NavBar/>
		  <Home />
		  <Footer/>
		  </div>
		  )
}

export default Root;