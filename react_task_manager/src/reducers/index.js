import { ADD_NOTE, DELETE_NOTE, TOGGLE_NOTE, EDIT_NOTE, ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, TOGGLE_SLOGAN, TOGGLE_CAT_FIELD, TOGGLE_NOTE_FIELD } from '../actions';

function nextId(state) {
    let _nextId = 1;

    const idArray = state.map(note => {
        return note.id
    });

    const sortIdArray = idArray.sort((a, b) => {
        return a - b;
    });

    sortIdArray.map(id => {
        if (_nextId === id) {
            _nextId++;
        }

        return id;
    });

    return _nextId;
}

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
            };

        case EDIT_CATEGORY:
            if (state.id === action.id) {
                state.title = action.title;
            }
            return state;

        case ADD_NOTE:
            if (state.id === action.categoryId) {
                const notes = state.notes;

                const note = {
                    id: nextId(notes),
                    title: action.title,
                    completed: false
                };

                notes.unshift(note);
            }
            return state;

        case DELETE_NOTE: 
            if (state.id === action.categoryId) {
                const notes = state.notes.filter(note => note.id !== action.id);

                state.notes = notes;
            }
            return state;

        case TOGGLE_NOTE:
            if (state.id === action.categoryId) {
                state.notes.map(note => {
                    if (note.id === action.id) {
                        note.completed = !note.completed;
                    }

                    return note;
                });
            }
            return state;

        case EDIT_NOTE:
            if (state.id === action.categoryId) {
                state.notes.map(note => {
                    if (note.id === action.id) {
                        note.title = action.title;
                    }

                    return note;
                });
            }
            return state;

        default:
            return state;
    }
}

export default function reducer(state = [], action) {
    const newState = {...state};

    switch (action.type) {
        case ADD_NOTE:
            newState.categories.map(obj => oneMoreReducer(obj, action));
            return newState;

        case DELETE_NOTE:
            newState.categories.map(obj => oneMoreReducer(obj, action));
            return newState;

        case TOGGLE_NOTE:
            newState.categories.map(obj => oneMoreReducer(obj, action));
            return newState;

        case EDIT_NOTE:
            newState.categories.map(obj => oneMoreReducer(obj, action));
            return newState;

        case ADD_CATEGORY:
            newState.categories.unshift(oneMoreReducer(newState.categories, action));
            return newState; 

        case DELETE_CATEGORY:
            const newCategories = newState.categories.filter(category => category.id !== action.id);
            newState.categories = newCategories;
            return newState;

        case EDIT_CATEGORY:
            newState.categories.map(category => oneMoreReducer(category, action));
            return newState;

        case TOGGLE_SLOGAN:
            const sloganHidden = state.viewFields.sloganHidden;
            newState.viewFields.sloganHidden = !sloganHidden;
            return newState;

        case TOGGLE_CAT_FIELD:
            const catFieldHidden = state.viewFields.catFieldHidden;
            newState.viewFields.catFieldHidden = !catFieldHidden;
            return newState;

        case TOGGLE_NOTE_FIELD:
            const notesFieldHidden = state.viewFields.notesFieldHidden;
            newState.viewFields.notesFieldHidden = !notesFieldHidden;
            return newState;
        
        default:
            return state;
    }
}