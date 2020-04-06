import { combineReducers } from 'redux';

import { default as categories} from './categoriesReducer/categoryReducer';
import { default as user } from './userReducer';
import { default as viewFields } from './viewFieldsReducer';

/*function reducer(state = {}, action) {
    return {
        categories: categories(state.categories, action),
        user: user(state.user, action),
        viewFields: viewFields(state.viewFields, action)
    }
}*/

const reducer = combineReducers({
    categories,
    user,
    viewFields
});

export default reducer;