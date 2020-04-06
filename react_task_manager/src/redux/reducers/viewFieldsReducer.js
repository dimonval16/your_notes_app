import { TOGGLE_SLOGAN, TOGGLE_CAT_FIELD, TOGGLE_NOTE_FIELD } from '../actions/viewFieldsActions';

export default function reducer(state = {}, action) {
    const newState = { ...state };

    switch (action.type) {
        case TOGGLE_SLOGAN:
            newState.sloganHidden = !newState.sloganHidden;
            return newState;

        case TOGGLE_CAT_FIELD:
            newState.catFieldHidden = !newState.catFieldHidden;
            return newState;

        case TOGGLE_NOTE_FIELD:
            newState.notesFieldHidden = !newState.notesFieldHidden;
            return newState;

        default:
            return state;
    }
}