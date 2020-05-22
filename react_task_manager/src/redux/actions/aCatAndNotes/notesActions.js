export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export function addNote(title, categoryId) {
    return {
        type: ADD_NOTE,
        categoryId,
        id: undefined,
        title
    }
}

export function deleteNote(id, categoryId) {
    return {
        type: DELETE_NOTE,
        categoryId,
        id
    };
}

export function toggleNote(id, categoryId) {
    return {
        type: TOGGLE_NOTE,
        categoryId,
        id
    };
}

export function editNote(id, title, categoryId) {
    return {
        type: EDIT_NOTE,
        categoryId,
        id,
        title
    };
}