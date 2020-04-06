import { ADD_NOTE, DELETE_NOTE, TOGGLE_NOTE, EDIT_NOTE } from '../../actions/notesActions';
import nextId from './idCalculate';

function oneMoreReducer(state = {}, action) {
    const newState = { ...state };
    let newNotes = [];

    switch (action.type) {
        case ADD_NOTE:
            if (newState.id === action.categoryId) {
                newNotes = newState.notes;

                const newNote = {
                    id: nextId(newNotes),
                    title: action.title,
                    completed: false
                };

                newNotes.unshift(newNote);

                newState.notes = newNotes;
            }
            return newState;

        case DELETE_NOTE:
            if (newState.id === action.categoryId) {
                newNotes = newState.notes.filter(note => note.id !== action.id);

                newState.notes = newNotes;
            }
            return newState;

        case TOGGLE_NOTE:
            if (newState.id === action.categoryId) {
                newNotes = newState.notes.map(note => {
                    if (note.id === action.id) {
                        note.completed = !note.completed;
                    }

                    return note;
                });

                newState.notes = newNotes;
            }
            return newState;

        case EDIT_NOTE:
            if (newState.id === action.categoryId) {
                newNotes = newState.notes.map(note => {
                    if (note.id === action.id) {
                        note.title = action.title;
                    }

                    return note;
                });

                newState.notes = newNotes;
            }
            return newState;

        default:
            return state;
    }
}

export default function reducer(state = {}, action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_NOTE:
            return newState.map(obj => oneMoreReducer(obj, action));

        case DELETE_NOTE:
            return newState.map(obj => oneMoreReducer(obj, action));

        case TOGGLE_NOTE:
            return newState.map(obj => oneMoreReducer(obj, action));

        case EDIT_NOTE:
            return newState.map(obj => oneMoreReducer(obj, action));

        default:
            return state;
    }
}