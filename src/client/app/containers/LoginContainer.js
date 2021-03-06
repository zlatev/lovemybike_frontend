import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import { login } from '../actions/actions'

const mapStateToProps = (state) => ({
  loginInProgress: state.auth.loginInProgress,
  authError: state.auth.error
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
    	dispatch(login(values));
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

export default LoginContainer