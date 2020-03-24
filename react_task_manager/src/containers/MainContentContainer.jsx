import { connect } from 'react-redux';
 
import MainContent from '../components/Main_content/MainContent';
import { addNote, deleteNote, toggleNote, editNote, toggleNoteField } from '../actions';

function mapStateToProps(state) {
    return {
        state: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSaveNote: () => dispatch(toggleNoteField()),
        onButtonClick: () => dispatch(toggleNoteField()),
        onStatusChange: () => (id, categoryId) => dispatch(toggleNote(id, categoryId)),
        onDelete: (id, categoryId) => dispatch(deleteNote(id, categoryId)),
        onEdit: (id, title, categoryId) => dispatch(editNote(id, title, categoryId)),
        onAdd: (title, categoryId) => this.store.dispatch(addNote(title, categoryId))
    };
}

const MainContentContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent) 

export default MainContentContainer;