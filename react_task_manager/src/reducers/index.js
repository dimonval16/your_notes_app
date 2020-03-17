import { ADD_NOTE, DELETE_NOTE, TOGGLE_NOTE, EDIT_NOTE, ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY } from '../actions';

function nextId(state) {
    let _nextId = 1;

    let idArray = state.map(note => {
        return note.id
    });

    let sortIdArray = idArray.sort((a, b) => {
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
                        title: 'Новый чоткий раздел',
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
                let notes = state.notes;

                let note = {
                    id: nextId(notes),
                    title: action.title,
                    completed: false
                };

                notes.unshift(note);
            }
            return state;

        case DELETE_NOTE: 
            if (state.id === action.categoryId) {
                let notes = state.notes.filter(note => note.id !== action.id);

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
    let _state = state.categories;

    switch (action.type) {
        case ADD_NOTE:
            _state.map(obj => oneMoreReducer(obj, action));
            return state;

        case DELETE_NOTE:
            _state.map(obj => oneMoreReducer(obj, action));
            return state;

        case TOGGLE_NOTE:
            _state.map(obj => oneMoreReducer(obj, action));
            return state;

        case EDIT_NOTE:
            _state.map(obj => oneMoreReducer(obj, action));
            return state;

        case ADD_CATEGORY:
            _state.unshift(oneMoreReducer(_state, action));
            return state; 

        case DELETE_CATEGORY:
            let newCategories = _state.filter(category => category.id !== action.id);
            state.categories = newCategories;
            return state;

        case EDIT_CATEGORY:
            _state.map(category => oneMoreReducer(category, action));
            return state;
        
        default:
            return state;
    }
}