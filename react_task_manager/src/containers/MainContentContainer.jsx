import React from 'react';

import MainContent from '../components/Main_content/MainContent';
import { addNote, deleteNote, toggleNote, editNote } from '../actions';

class MainContentContainer extends React.Component {
    constructor(props) {
        super(props);

        this.store = this.props.store;

        // -- bind this for methods --
        this.showAddForm = this.showAddForm.bind(this);
        this.editNote = this.editNote.bind(this);
        this.addNote = this.addNote.bind(this);
        this.noteDelete = this.noteDelete.bind(this);
        this.noteStatusChange = this.noteStatusChange.bind(this);
        // -- end --
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
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

    editNote(id, title, categoryId) {
        this.store.dispatch(editNote(id, title, categoryId));
    }

    addNote(title, categoryId) {
        this.store.dispatch(addNote(title, categoryId));
    }

    noteDelete(id, categoryId) {
        this.store.dispatch(deleteNote(id, categoryId));
    }

    noteStatusChange(id, categoryId) {
        this.store.dispatch(toggleNote(id, categoryId));
    }

    render() {
        const categories = this.store.getState().categories;

        return (
            <MainContent
                categories={categories}
                onSaveNote={this.hideAddForm}
                onButtonClick={this.showAddForm}
                onStatusChange={this.noteStatusChange}
                onDelete={this.noteDelete}
                onEdit={this.editNote}
                onAdd={this.addNote}
            />
        );
    }
}

export default MainContentContainer;