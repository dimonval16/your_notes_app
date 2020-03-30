import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import { toggleSlogan } from '../actions'

function mapStateToProps(state) {
    return {
        sloganHidden: state.viewFields.sloganHidden
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleSlogan: () => dispatch(toggleSlogan())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);