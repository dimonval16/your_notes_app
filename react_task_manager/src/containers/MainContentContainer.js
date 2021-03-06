import {
    addNote,
    deleteNote,
    toggleNote,
    editNote,
    toggleNoteField
} from '../redux/actions';
import { connect } from 'react-redux';
import MainContent from '../components/MainContent/MainContent';
import { getFilteredNotes } from "../redux/reducers";

function mapStateToProps(state) {
    return {
        categories: getFilteredNotes(state.categories),
        notesFieldHidden: state.viewFields.notesFieldHidden
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleAddField: () => dispatch(toggleNoteField()),
        onToggleNote: (id, categoryId, status) => dispatch(toggleNote(id, categoryId, status)),
        onDelete: (id, categoryId) => dispatch(deleteNote(id, categoryId)),
        onEdit: (id, title, categoryId) => dispatch(editNote(id, title, categoryId)),
        onAdd: (title, categoryId) => dispatch(addNote(title, categoryId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);