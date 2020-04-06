export const TOGGLE_SLOGAN = 'TOGGLE_SLOGAN';
export const TOGGLE_CAT_FIELD = 'TOGGLE_CAT_FIELD';
export const TOGGLE_NOTE_FIELD = 'TOGGLE_NOTE_FIELD';

export function toggleNoteField() {
    return {
        type: TOGGLE_NOTE_FIELD
    };
}

export function toggleCatField() {
    return {
        type: TOGGLE_CAT_FIELD
    };
}

export function toggleSlogan() {
    return {
        type: TOGGLE_SLOGAN
    };
}

