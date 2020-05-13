import { connect } from 'react-redux';
import RegForm from '../components/Forms/RegForm';
import {
    changeRegEmailInputAC,
    changeRegNameInput,
    changeRegPasswordInput,
    changeConfirmPasswordInput
} from '../redux/actions'


function mapStateToProps(state) {
    return {
        regForm: state.regForm
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onEmailRegInputChange: inputValue => dispatch(changeRegEmailInputAC(inputValue)),
        onNameRegInputChange: inputValue => dispatch(changeRegNameInput(inputValue)),
        onPasswordRegInputChange: inputValue => dispatch(changeRegPasswordInput(inputValue)),
        onPasswordConfirmInputChange: inputValue => dispatch(changeConfirmPasswordInput(inputValue))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);