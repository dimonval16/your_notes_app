import { connect } from 'react-redux';
import LoginFormHandler from './LoginFormHandler';
import {
    changeEmailInputAC,
    changePasswordInputAC,
    loginRequestAC
} from '../../redux/actions';

function mapStateToProps(state) {
    return {
        loginForm: state.loginForm,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onEmailInputChange: inputValue => dispatch(changeEmailInputAC(inputValue)),
        onPasswordInputChange: inputValue => dispatch(changePasswordInputAC(inputValue)),
        onLogin: data => dispatch(loginRequestAC(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormHandler);