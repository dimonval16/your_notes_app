export const SET_FILTER = 'SET_FILTER';

export function setFilterAC(filterValue) {
    return {
        type: SET_FILTER,
        filterValue
    }
}