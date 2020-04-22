import {connect} from 'react-redux';
import Slogan from '../components/Slogan/Slogan';

function mapStateToProps(state) {
    return {
        sloganHidden: state.viewFields.sloganHidden,
        userName: state.user.name
    };
}

export default connect(mapStateToProps)(Slogan); 