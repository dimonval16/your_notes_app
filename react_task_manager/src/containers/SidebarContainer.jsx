import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import { addCategory, deleteCategory, editCategory } from '../actions';

class SidebarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        this.state = {
            openedCategoryForm: false
        };

        this.addCategoryFormRef = React.createRef();

        // -- bind this for methods --
        this.showAddForm = this.showAddForm.bind(this);
        this.addCategory = this.addCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.catchSaveIcon = this.catchSaveIcon.bind(this);
        this.catchState = this.catchState.bind(this);
        // -- end --
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    addCategory(title) {
        this.store.dispatch(addCategory(title));
    }

    editCategory(title, categoryId) {
        this.store.dispatch(editCategory(categoryId, title));
    }

    deleteCategory(categoryId) {
        this.store.dispatch(deleteCategory(categoryId));
    }

    hideAddForm(opened, ref) {
        let addForm = ref.current;

        if (opened === true) {
            addForm.style.position = 'absolute';
            addForm.style.width = '0';
            addForm.style.visibility = 'hidden';
        }
    }

    showAddForm(opened, ref) {
        let addForm = ref.current;

        if (opened === false) {
            addForm.style.position = 'static';
            addForm.style.width = '100%';
            addForm.style.visibility = 'visible';
        } else {
            this.hideAddForm(opened, ref);
        }
    }

    catchSaveIcon() {
        if (this.state.openedCategoryForm === true) {
            this.hideAddForm(this.state.openedCategoryForm, this.addCategoryFormRef);

            this.setState({ openedCategoryForm: false });
        }
    }

    catchState() {
        if (this.state.openedCategoryForm === false) {
            this.showAddForm(this.state.openedCategoryForm, this.addCategoryFormRef);

            this.setState({ openedCategoryForm: true });
        } else {
            this.showAddForm(this.state.openedCategoryForm, this.addCategoryFormRef);

            this.setState({ openedCategoryForm: false });
        }
    }

    render() {
        const state = this.store.getState();

        return (
            <Sidebar
                state={state}
                addCategoryFormRef={this.addCategoryFormRef}
                openedForm={this.state.openedCategoryForm}
                onClickSave={this.catchSaveIcon}
                onButtonClick={this.catchState}
                onCategoryDelete={this.deleteCategory}
                onCategoryEdit={this.editCategory}
                onCategoryAdd={this.addCategory}
            />
        );
    }
}

export default SidebarContainer;