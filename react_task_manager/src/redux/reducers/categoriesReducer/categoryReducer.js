import { ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY } from '../../actions/categoryActions';
import { ADD_NOTE, DELETE_NOTE, TOGGLE_NOTE, EDIT_NOTE } from '../../actions/notesActions';
import { default as notesReducer } from './notesReducer';
import nextId from './idCalculate';

function oneMoreReducer(state = {}, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            const newCat=[...state]

            return {
                id: nextId(newCat),
                title: action.title,
                notes: [
                    {
                        id: 1,
                        title: 'Классная заметка',
                        completed: false
                    }
                ]
            };

        case EDIT_CATEGORY:
            const newState = { ...state };

            if (newState.id === action.id) {
                newState.title = action.title;
            }
            return newState;

        default:
            return state;
    }
}

export default function reducer(state = [], action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_CATEGORY:
            newState.unshift(oneMoreReducer(newState, action));
            return newState;

        case DELETE_CATEGORY:
            return newState.filter(category => category.id !== action.id);

        case EDIT_CATEGORY:
            return newState.map(obj => oneMoreReducer(obj, action));

        case ADD_NOTE:
            return notesReducer(newState, action);

        case DELETE_NOTE:
            return notesReducer(newState, action);

        case TOGGLE_NOTE:
            return notesReducer(newState, action);

        case EDIT_NOTE:
            return notesReducer(newState, action);

        default:
            return state;
    }
}
