import {
    GET_USER_INFO,
    LOG_OUT,
    SET_PHOTO,
    CONFIRM_EMAIL,
    CHANGE_NAME
} from '../../actions'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                email: action.result.email,
                enabled: action.result.enabled,
                id: action.result.id,
                photo: action.result.photo ? action.result.photo : state.photo,
                signUpDate: action.result.signUpDate,
                name: action.result.username ? action.result.username : 'User'
            }

        case SET_PHOTO:
            return {
                ...state,
                photo: action.photo
            }

        case CHANGE_NAME:
            return {
                ...state,
                name: action.userName
            }

        case CONFIRM_EMAIL:
            return {
                ...state,
                enabled: true
            }

        case LOG_OUT: {
            return {
                ...state,
                email: '',
                enabled: false,
                id: 0,
                photo: 'account_circle',
                signUpDate: '',
                name: '',
            }
        }

        default:
            return {...state}
    }
} 