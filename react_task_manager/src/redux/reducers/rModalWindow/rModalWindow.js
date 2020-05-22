import {
    ACTIVATE_MODAL_WINDOW,
    CLOSE_MODAL_WINDOW,
    LOG_OUT,
    SIGN_UP_SUCCESS
} from '../../actions'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case ACTIVATE_MODAL_WINDOW:
            return {
                ...state,
                status: true,
                reason: action.reason,
                title: action.title
            }

        case CLOSE_MODAL_WINDOW:
            return {
                ...state,
                status: null
            }

        case LOG_OUT:
            return {
                ...state,
                status: null,
                ok: null,
                reason: '',
                title: ''
            }

        case SIGN_UP_SUCCESS:
            return {
                ...state,
                status: null,
                ok: null,
                reason: '',
                title: ''
            }

        default:
            return {
                ...state
            }
    }
}