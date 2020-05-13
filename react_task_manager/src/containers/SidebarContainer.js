import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';
import {addCategory, deleteCategory, editCategory, toggleCatField} from '../redux/actions';

function mapStateToProps(state) {
    return {
        categories: state.categories,
        user: state.user,
        catFieldHidden: state.viewFields.catFieldHidden
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