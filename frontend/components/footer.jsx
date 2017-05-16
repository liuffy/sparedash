import React from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Footer extends React.Component{
  render(){

  	return(
  	<MuiThemeProvider>
			<div className="footer">
			<div className="column-divs">


				<div className="column-div">
					<h3 className="column-header">SPAREDASH</h3>

					<ul className="link-list">
						<li><a 
									target="_blank"
									href="#">Home</a></li>
						<li><a 
									target="_blank"
									href="#">About</a></li>
						<li><a 
									target="_blank"
									href="#">Contact</a></li>
						<li><a 
									target="_blank"
									href="#">Write a Review</a></li>
					</ul>
				</div>

				<div className="column-div">
					<h3 className="column-header">SPECIALISTS</h3>

					<ul className="link-list">
							<li><a 
									target="_blank"
									href="#">Primary Care Physicians</a>
							</li>

							<li><a 
									target="_blank"
									href="#">Pediatricians</a>
							</li>

							<li><a 
									target="_blank"
									href="#">Optometrists</a>
							</li>

							<li><a 
									target="_blank"
									href="#">Dentists</a>
							</li>
					</ul>
				</div>

				<div className="column-div">
					<h3 className="column-header">CONNECT</h3>
						<ul>
							<li>
							<a href="#" target="_blank" className="fa fa-facebook"></a>
							<a href="#" target="_blank" className="fa fa-twitter"></a>
							<a href="#" target="_blank" className="fa fa-instagram"></a>
							<a href="#" target="_blank" className="fa fa-pinterest"></a>
							</li>
						</ul>
				</div>
				</div>
			</div>
  	</MuiThemeProvider>
  		)
  }
}

export default Footer;