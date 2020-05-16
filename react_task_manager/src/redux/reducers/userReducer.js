import { GET_USER_INFO, LOG_OUT } from '../actions'

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                email: action.result.email,
                enabled: action.result.enabled,
                id: action.result.id,
                photo: action.result.imageBase64 ? action.result.imageBase64 : state.photo,
                signUpDate: action.result.signUpDate,
                name: action.result.username ? action.result.username : 'A User'
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