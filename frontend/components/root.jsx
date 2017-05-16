import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {  HashRouter as Router,
				  Route,
				  NavLink } from 'react-router-dom';
import NavBar from './nav_bar'
import Footer from './footer';


injectTapEventPlugin();

const Root = () => {
  return(
	  	<div>
		  <NavBar/>
		  <Footer/>
		  </div>
		  )
}

export default Root;