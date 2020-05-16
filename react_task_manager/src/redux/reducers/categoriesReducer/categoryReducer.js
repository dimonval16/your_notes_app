import { default as notesReducer } from './notesReducer';
import {
    GET_CATEGORY_INFO,
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
    SET_FILTER,
    LOG_OUT
} from '../../actions';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_CATEGORY_INFO:
            return {
                ...state,
                data: [...action.result]
            }

        case ADD_CATEGORY:
            return {
                ...state,
                data: [...action.result]
            }

        case DELETE_CATEGORY:
            return {
                ...state,
                data: [...action.result]
            }

        case EDIT_CATEGORY:
            return {
                ...state,
                data: [...action.result]
            }

        case LOG_OUT:
            return {
                ...state,
                data: []
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
