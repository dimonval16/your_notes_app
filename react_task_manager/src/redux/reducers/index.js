import { combineReducers } from 'redux';
import { default as categories } from './categoriesReducer/categoryReducer';
import { default as user } from './userReducer';
import { default as viewFields } from './viewFieldsReducer';
import { default as loginForm } from './loginFormReducer';
import { default as regForm } from './regFormReducer';
import { default as authorized } from './authorizedReducer'
import * as fromCategoryReducer from './categoriesReducer/categoryReducer';

/*function reducer(state = {}, action) {
    return {
        categories: categories(state.categories, action),
        user: user(state.user, action),
        viewFields: viewFields(state.viewFields, action),
        filter: filter(state.filter, action)
    }
}*/

const reducer = combineReducers({
    categories,
    user,
    viewFields,
    authorized,
    loginForm,
    regForm
});

export default reducer;

export function getFilteredNotes(state) {
    return fromCategoryReducer.getFilteredNotes(state.data, state.filterStatus);
}