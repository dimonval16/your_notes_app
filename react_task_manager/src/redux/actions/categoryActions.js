export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

export function addCategory(title) {
    return {
        type: ADD_CATEGORY,
        id: undefined,
        title
    };
}

export function deleteCategory(id) {
    return {
        type: DELETE_CATEGORY,
        id
    };
}

export function editCategory(id, title) {
    return {
        type: EDIT_CATEGORY,
        id,
        title
    };
}