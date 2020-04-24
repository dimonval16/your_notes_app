export const SET_FILTER = 'SET_FILTER';
export const ALL = 'ALL';
export const COMPLETED = 'COMPLETED';
export const NOT_COMPLETED = 'NOT_COMPLETED';

export function setFilterAC(filterValue) {
    return {
        type: SET_FILTER,
        filterValue
    }
}