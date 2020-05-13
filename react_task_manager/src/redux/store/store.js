import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "../reducers";
import state from './data/state';

const store = createStore(reducer, state, applyMiddleware(thunk));

export default store;

/* -- Redux-Thunk analog --
function addPromiseThunkSupport(store) {
    const dispatch = store.dispatch;

    return action => {
        if (typeof action.then === 'function') {
            return action.then(dispatch);
        } else if (typeof action === 'function') {
            return action(dispatch);
        }

        return dispatch(action);
    }
}
store.dispatch = addPromiseThunkSupport(store);
 */