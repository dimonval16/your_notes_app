import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { toggleSlogan, logOutAC } from '../redux/actions'

function mapStateToProps(state) {
    return {
        sloganHidden: state.viewFields.sloganHidden
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleSlogan: () => dispatch(toggleSlogan()),
        onLogOut: () => dispatch(dispatch(logOutAC()))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);