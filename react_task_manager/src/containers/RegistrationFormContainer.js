import { connect } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import {changeEmailInputAC, changePasswordInputAC, tryLoginAC} from '../redux/actions';

function mapStateToProps(state) {
    return {
        registrationForm: state.registrationForm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onEmailInputChange: inputValue => dispatch(changeEmailInputAC(inputValue)),
        onPasswordInputChange: inputValue => dispatch(changePasswordInputAC(inputValue)),
        onLogin: () => dispatch(tryLoginAC())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);