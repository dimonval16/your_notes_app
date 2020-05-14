import { default as notesReducer } from './notesReducer';
import nextId from './idCalculate';
import {
    ADD_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    ADD_NOTE,
    DELETE_NOTE,
    TOGGLE_NOTE,
    EDIT_NOTE,
    ALL,
    COMPLETED,
    NOT_COMPLETED,
    SET_FILTER
} from '../../actions';

function oneMoreReducer(state = {}, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                id: nextId(state),
                title: action.title,
                notes: []
            }

        case EDIT_CATEGORY:
            return {
                ...state,
                title: state.id === action.id ? state.title = action.title : state.title
            }

        default:
            return state;
    }
}

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                data: [oneMoreReducer(state.data, action), ...state.data]
            }

        case DELETE_CATEGORY:
            return {
                ...state,
                data: state.data.filter(category => category.id !== action.id)
            }

        case EDIT_CATEGORY:
            return {
                ...state,
                data: state.data.map(category => oneMoreReducer(category, action))
            }

        case ADD_NOTE:
            return {
                ...state,
                data: notesReducer(state.data, action)
            }

        case DELETE_NOTE:
            return {
                ...state,
                data: notesReducer(state.data, action)
            }

        case TOGGLE_NOTE:
            return {
                ...state,
                data: notesReducer(state.data, action)
            }

        case EDIT_NOTE:
            return {
                ...state,
                data: notesReducer(state.data, action)
            }

        case SET_FILTER:
            return {
                ...state,
                filterStatus: action.filterValue
            }

        default:
            return state;
    }
}

export function getFilteredNotes(state, filterStatus) {
    switch (filterStatus) {
        case ALL:
            return state;

        case COMPLETED:
            return state.map(cat => {
                return {
                    ...cat,
                    notes: cat.notes.filter(note => note.completed)
                }
            });

        case NOT_COMPLETED:
            return state.map(cat => {
                return {
                    ...cat,
                    notes: cat.notes.filter(note => !note.completed)
                }
            });

        default:
            return state;
    }
}
