import { connect } from 'react-redux';
import SignUpFormHandler from './SignUpFormHandler';
import {
    changeRegEmailInputAC,
    changeRegNameInput,
    changeRegPasswordInput,
    changeConfirmPasswordInput,
    requestSignUpAC
} from '../../redux/actions'


function mapStateToProps(state) {
    return {
        regForm: state.regForm,
        fetching: state.fetching.status
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSignUp: (data) => dispatch(requestSignUpAC(data)),
        onEmailRegInputChange: inputValue => dispatch(changeRegEmailInputAC(inputValue)),
        onNameRegInputChange: inputValue => dispatch(changeRegNameInput(inputValue)),
        onPasswordRegInputChange: inputValue => dispatch(changeRegPasswordInput(inputValue)),
        onPasswordConfirmInputChange: inputValue => dispatch(changeConfirmPasswordInput(inputValue))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormHandler);