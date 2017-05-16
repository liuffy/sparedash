import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SessionForm from './session_form';
import Content from './content';
	
class Home extends React.Component{
  render(){

  	return(
  		<div>
	  	<MuiThemeProvider>
	  		<SessionForm />
	  		</MuiThemeProvider>
	  		<MuiThemeProvider>
	  		<Content />
	  	</MuiThemeProvider>
	  		</div>
		)
  }
}


export default Home;