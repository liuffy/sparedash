
import { connect } from 'react-redux';
import { login, signup, logout } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  formType: ownProps.formType,
  demo: ownProps.demo
})

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.formType === 'login') ? login : signup;

  return ({
    processForm: user => dispatch(processForm(user))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);