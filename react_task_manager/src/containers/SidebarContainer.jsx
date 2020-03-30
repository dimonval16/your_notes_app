import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar/Sidebar';
import { addCategory, deleteCategory, editCategory, toggleCatField } from '../actions';

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleAddField: () => dispatch(toggleCatField()),
        onCategoryDelete: categoryId => dispatch(deleteCategory(categoryId)),
        onCategoryEdit: (categoryId, title) => dispatch(editCategory(categoryId, title)),
        onCategoryAdd: title => dispatch(addCategory(title))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);