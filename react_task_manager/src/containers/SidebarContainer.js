import {
    addCategory,
    deleteCategory,
    editCategory,
    toggleCatField,
    setPhotoAC,
    activateModalAC
} from '../redux/actions';
import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar/Sidebar';

function mapStateToProps(state) {
    return {
        categories: state.categories.data,
        user: state.user,
        catFieldHidden: state.viewFields.catFieldHidden,
        modalWindow: state.modalWindow,
        fetching: state.fetching.status
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleAddField: () => dispatch(toggleCatField()),
        onCategoryDelete: categoryId => dispatch(deleteCategory(categoryId)),
        onCategoryEdit: (categoryId, title) => dispatch(editCategory(categoryId, title)),
        onCategoryAdd: title => dispatch(addCategory(title)),
        onSetPhoto: file => dispatch(setPhotoAC(file)),
        onModalWindow: (title, reason) => dispatch(activateModalAC(title, reason))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);