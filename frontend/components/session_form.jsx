import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
  margin: 'auto',
  width:'100%',
  textAlign: 'center',
  alignContents: 'center',
  display: 'inline-block',
};


class SessionForm extends React.Component {


  handleSubmit(event){
    event.preventDefault();
    this.props.processForm(this.state);
  }

  update(place){
    return (event) => {
      this.setState({[place]: event.target.value});
    };
  }


  render(){

    return (
       <Paper 
          style={style} 
          className="paper-wrapper"
          zDepth={2}>
           <div className="col-sm-8 col-md-offset-3 col-md-offset-2 form-wrapper text-center contactform">
              <form action="#"
                  method="POST"
                  id="contact-form">
                  <h3>Sign up to join our Provider Network.</h3>
                <div className="form-group name col-md-4 col-sm-6">
                  <label htmlFor="input-name">First Name</label>
                  <input type="text" name="Name" id="input-name" className="form-control" required/>
                </div>
                   <div className="form-group name col-md-4 col-sm-6">
                  <label htmlFor="input-name">Last Name</label>
                  <input type="text" name="Name" id="input-name" className="form-control" required/>
                </div>
                <div className="form-group email col-md-8 col-sm-6">
                  <label htmlFor="email">Your e-mail</label>
                  <input type="text" name="Email" id="email" className="form-control" required/>
                </div>             

                <div className="form-group password col-md-4 col-sm-6">
                  <label htmlFor="phone">Password</label>
                  <input type="password" name="password" id="password" className="form-control" required/>
                </div>          

                <div className="form-group password col-md-4 col-sm-6">
                  <label htmlFor="phone">Re-enter password</label>
                  <input type="password" name="password" id="password" className="form-control" required/>
                </div>
                <div className="form-group password col-md-8 col-sm-6">
                <RaisedButton label="Submit" type="submit" primary={true} />

                </div>
              </form>
              </div>
              </Paper>
    );
  }
}

export default SessionForm;