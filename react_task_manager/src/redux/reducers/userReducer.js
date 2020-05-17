import {
    GET_USER_INFO,
    LOG_OUT,
    SET_PHOTO
} from '../actions'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_INFO:
            console.log('get user info ' + action.result)
            return {
                ...state,
                email: action.result.email,
                enabled: action.result.enabled,
                id: action.result.id,
                photo: action.photo ? action.photo : state.photo,
                signUpDate: action.result.signUpDate,
                name: action.result.username ? action.result.username : 'A User'
            }

        case SET_PHOTO:
            return {
                ...state,
                photo: action.photo
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