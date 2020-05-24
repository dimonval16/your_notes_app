import {
    changeNameAC,
    changePassAC,
    closeModalWindowAC,
    logOutAC,
    signUpSuccess
} from '../redux/actions';
import { connect } from 'react-redux';
import ModalWindowHandler from "../components/ModalWindow/ModalWindowHandler";


function mapStateToProps(state) {
    return {
        modalWindowData: state.modalWindow
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCloseWindow: () => dispatch(closeModalWindowAC()),
        onLogOut: () => dispatch(logOutAC()),
        onSignUp: () => dispatch(signUpSuccess()),
        onChangeName: data => dispatch(changeNameAC(data)),
        onChangePass: data => dispatch(changePassAC(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowHandler);