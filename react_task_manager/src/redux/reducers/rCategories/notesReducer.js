import {
    ADD_NOTE,
    DELETE_NOTE,
    TOGGLE_NOTE,
    EDIT_NOTE
} from '../../actions';

function oneMoreReducer(state = {}, action) {
    switch (action.type) {
        case ADD_NOTE:
            const newNote = {
                id: action.id,
                title: action.title,
                completed: action.completed
            }
            return {
                ...state,
                notes: state.id === action.categoryId ? [newNote, ...state.notes] : state.notes
            }

        case DELETE_NOTE:
            return {
                ...state,
                notes:
                    state.id === action.categoryId ?
                        state.notes.filter(note => note.id !== action.id)
                        :
                        state.notes
            }

        case TOGGLE_NOTE:
            return {
                ...state,
                notes:
                    state.id === action.categoryId ?
                        state.notes.map(note => {
                            return {
                                ...note,
                                completed: note.id === action.id ? action.completed : note.completed
                            }
                        })
                        :
                        state.notes
            }

        case EDIT_NOTE:
            return {
                ...state,
                notes:
                    state.id === action.categoryId ?
                        state.notes.map(note => {
                            return {
                                ...note,
                                title: note.id === action.id ? note.title = action.title : note.title
                            }
                        })
                        :
                        state.notes
            }

        default:
            return state;
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_NOTE:
            return state.map(category => oneMoreReducer(category, action));

        case DELETE_NOTE:
            return state.map(category => oneMoreReducer(category, action));

        case TOGGLE_NOTE:
            return state.map(category => oneMoreReducer(category, action));

        case EDIT_NOTE:
            return state.map(category => oneMoreReducer(category, action));

        default:
            return state;
    }
}