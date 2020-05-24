import {
    HOST_SAMOHA,
    //HOST_SASHKA,
    SIGN_IN_SAMOHA,
    //SIGN_IN_SASHKA
} from '../../requestsData/requestData';

export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOADING = 'LOADING';

//const signInSashka = HOST_SASHKA + SIGN_IN_SASHKA;
const signInSamoha = HOST_SAMOHA + SIGN_IN_SAMOHA;
const activeUrl = signInSamoha;

export function logOutAC() {
    localStorage.removeItem('accessToken');
    return {
        type: LOG_OUT
    }
}

export function changeEmailInputAC(inputValue) {
    return {
        type: CHANGE_EMAIL_INPUT,
        inputValue
    };
}

export function changePasswordInputAC(inputValue) {
    return {
        type: CHANGE_PASSWORD_INPUT,
        inputValue
    };
}

export const loginRequestAC = data => dispatch => {
    dispatch({ type: LOADING });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(activeUrl, requestOptions)
        .then(response => response.json())
        .then(response => {
            if (response.status >= 400) {
                return dispatch({ type: LOGIN_FAILURE, response });
            } else if (response.Error) {
                alert(`Error: ${response.Error}`);
            } else if (response.accessToken) {
                localStorage.setItem('accessToken', response.accessToken);
                return dispatch({ type: LOGIN_SUCCESS });
            }
        })
        .catch(error => console.log('Error', error));
}

