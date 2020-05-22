import { combineReducers } from 'redux';
import { default as categories } from './rCategories/categoryReducer';
import { default as user } from './rUser/userReducer';
import { default as viewFields } from './rViewFields/viewFieldsReducer';
import { default as loginForm } from './rForms/loginFormReducer';
import { default as regForm } from './rForms/regFormReducer';
import { default as authorized } from './rAuthorize/authorizedReducer';
import modalWindow from "./rModalWindow/rModalWindow";
import fetching from './rFetching/rFetching';
import * as fromCategoryReducer from './rCategories/categoryReducer';

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
    regForm,
    modalWindow,
    fetching
});

export default reducer;

export function getFilteredNotes(state) {
    return fromCategoryReducer.getFilteredNotes(state.data, state.filterStatus);
}