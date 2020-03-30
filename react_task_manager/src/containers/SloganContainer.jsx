import { connect } from 'react-redux';
import Slogan from '../components/Slogan/Slogan';

function mapStateToProps(state) {
    return {
        state: state
    };
}

export default connect(mapStateToProps)(Slogan); 