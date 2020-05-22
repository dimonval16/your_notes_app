import {
    TOGGLE_SLOGAN,
    TOGGLE_CAT_FIELD,
    TOGGLE_NOTE_FIELD,
    ADD_CATEGORY
} from '../../actions';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case TOGGLE_SLOGAN:
            return {
                ...state,
                sloganHidden: !state.sloganHidden
            }

        case TOGGLE_CAT_FIELD:
            return {
                ...state,
                catFieldHidden: !state.catFieldHidden
            }

        case ADD_CATEGORY:
            return {
                ...state,
                catFieldHidden: !state.catFieldHidden
            }

        case TOGGLE_NOTE_FIELD:
            return {
                ...state,
                notesFieldHidden: !state.notesFieldHidden
            }

        default:
            return state;
    }
}