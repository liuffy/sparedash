import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Footer extends React.Component{
  render(){

  	return(
  	<MuiThemeProvider>
			<div className="footer">
			<div className="column-divs col-md-12">

			<div className="row footer-row">
				<div className="col-sm-4 col-md-3">
					<h3 className="column-header-1">SPAREDASH</h3>

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

				<div className="col-sm-4 col-md-3">
					<h3 className="column-header-1">SPECIALISTS</h3>

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

				<div className="col-sm-4 col-md-3">
					<h3 className="column-header-1">CONNECT</h3>
						<ul className="link-list">
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
			</div>
  	</MuiThemeProvider>
  		)
  }
}

export default Footer;