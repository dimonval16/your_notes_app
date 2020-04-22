import {ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY} from '../../actions/categoryActions';
import {ADD_NOTE, DELETE_NOTE, TOGGLE_NOTE, EDIT_NOTE} from '../../actions/notesActions';
import {default as notesReducer} from './notesReducer';
import nextId from './idCalculate';

function oneMoreReducer(state = {}, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                id: nextId(state),
                title: action.title,
                notes: [
                    {
                        id: 1,
                        title: 'Классная заметка',
                        completed: false
                    }
                ]
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

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return [oneMoreReducer(state, action), ...state]

        case DELETE_CATEGORY:
            return state.filter(category => category.id !== action.id);

        case EDIT_CATEGORY:
            return state.map(category => oneMoreReducer(category, action));

        case ADD_NOTE:
            return notesReducer(state, action);

        case DELETE_NOTE:
            return notesReducer(state, action);

        case TOGGLE_NOTE:
            return notesReducer(state, action);

        case EDIT_NOTE:
            return notesReducer(state, action);

        default:
            return state;
    }
}
