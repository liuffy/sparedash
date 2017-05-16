import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  customWidth: {
    width: 200,
  },
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange(event, index, value) {
    this.setState({value})
	}; 

  render() {
    return (
    	<MuiThemeProvider>
				<div className="row menu-row">
				<img  className="logo-pic"
							src="/assets/sparedash_logo.png"/>
							
		        <DropDownMenu 
		          value={this.state.value}
		          onChange={this.handleChange}
		          style={styles.customWidth}
		          autoWidth={false}
	        	>
		          <MenuItem value={1} primaryText="About Us" />
		          <MenuItem value={2} primaryText="Careers" />
		          <MenuItem value={3} primaryText="Contact" />
		          <MenuItem value={4} primaryText="Request a Review" />
		        </DropDownMenu>
		        <br />

		        <DropDownMenu
		          value={this.state.value}
		          onChange={this.handleChange}
		          style={styles.customWidth}
		          autoWidth={false}
		        >
		          <MenuItem value={1} primaryText="Partners" />
		          <MenuItem value={2} primaryText="Resources" />

		        </DropDownMenu>
		      </div>
    	</MuiThemeProvider>
    );
  }
}

export default NavBar;