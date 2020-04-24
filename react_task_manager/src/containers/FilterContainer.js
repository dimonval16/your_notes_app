import {connect} from 'react-redux';
import {setFilterAC} from "../redux/actions";
import Filter from "../components/Filter/Filter";

function mapStateToProps(state) {
    return {
        activeFilter: state.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetFilter: filter => dispatch(setFilterAC(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);