import {
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
        onSignUp: () => dispatch(signUpSuccess())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindowHandler);