import { connect } from 'react-redux';
import LoginForm from '../components/Forms/LoginForm';
import { changeEmailInputAC, changePasswordInputAC, loginRequestAC } from '../redux/actions';

function mapStateToProps(state) {
    return {
        loginForm: state.loginForm,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onEmailInputChange: inputValue => dispatch(changeEmailInputAC(inputValue)),
        onPasswordInputChange: inputValue => dispatch(changePasswordInputAC(inputValue)),
        onLogin: (url, data, history) => dispatch(loginRequestAC(url, data, history))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);