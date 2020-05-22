import { toggleSlogan, confirmEmailAC } from '../redux/actions';
import { connect } from 'react-redux';
import Header from '../components/Header/Header';


function mapStateToProps(state) {
    return {
        sloganHidden: state.viewFields.sloganHidden,
        isEnabled: state.user.enabled
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleSlogan: () => dispatch(toggleSlogan()),
        onConfirm: () => dispatch(confirmEmailAC())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);