import {SET_FILTER} from "../actions";

export default function reducer(state = 'ALL', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filterValue;

        default:
            return state;
    }
}