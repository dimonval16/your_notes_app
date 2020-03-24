import { connect } from 'react-redux';
import Slogan from '../components/Slogan/Slogan';

function mapStateToProps(state) {
    return {
        state: state
    };
}

const SloganContainer = connect(mapStateToProps)(Slogan); 

export default SloganContainer;