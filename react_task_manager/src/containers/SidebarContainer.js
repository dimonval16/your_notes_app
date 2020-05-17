import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';
import {
    addCategory,
    deleteCategory,
    editCategory,
    toggleCatField,
    logOutAC,
    setPhotoAC
} from '../redux/actions';

function mapStateToProps(state) {
    return {
        categories: state.categories.data,
        user: state.user,
        catFieldHidden: state.viewFields.catFieldHidden
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleAddField: () => dispatch(toggleCatField()),
        onCategoryDelete: categoryId => dispatch(deleteCategory(categoryId)),
        onCategoryEdit: (categoryId, title) => dispatch(editCategory(categoryId, title)),
        onCategoryAdd: title => dispatch(addCategory(title)),
        onLogOut: () => dispatch(logOutAC()),
        onSetPhoto: file => dispatch(setPhotoAC(file))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);