import {
    HOST_SAMOHA,
    HOST_SASHKA,
    SIGN_UP_SAMOHA,
    SIGN_UP_SASHKA
} from '../../requestsData/requestData';
import {ACTIVATE_MODAL_WINDOW, LOADING} from "..";

export const CHANGE_REG_EMAIL_INPUT = 'CHANGE_REG_EMAIL_INPUT';
export const CHANGE_REG_NAME_INPUT = 'CHANGE_REG_NAME_INPUT';
export const CHANGE_REG_PASSWORD_INPUT = 'CHANGE_REG_PASSWORD_INPUT';
export const CHANGE_CONFIRM_PASSWORD_INPUT = 'CHANGE_CONFIRM_PASSWORD_INPUT';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

const signUpSashka = HOST_SASHKA+SIGN_UP_SASHKA;
const signUpSamoha = HOST_SAMOHA+SIGN_UP_SAMOHA;
const activeUrl = signUpSamoha;

export function changeRegEmailInputAC(inputValue) {
    return {
        type: CHANGE_REG_EMAIL_INPUT,
        inputValue
    }
}

export function changeRegNameInput(inputValue) {
    return {
        type: CHANGE_REG_NAME_INPUT,
        inputValue
    }
}

export function changeRegPasswordInput(inputValue) {
    return {
        type: CHANGE_REG_PASSWORD_INPUT,
        inputValue
    }
}

export function changeConfirmPasswordInput(inputValue) {
    return {
        type: CHANGE_CONFIRM_PASSWORD_INPUT,
        inputValue
    }
}

export function signUpSuccess() {
    return {
        type: SIGN_UP_SUCCESS
    }
}

export const requestSignUpAC = data => dispatch => {
    dispatch({ type: LOADING });

    const sashkaData = {
        email: data.email,
        password: data.password,
        username: data.name
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(activeUrl === signUpSashka ? sashkaData : data)
    };

    fetch(activeUrl, requestOptions)
        .then(response => response.json())
        .then(response => {
            if (response.status >= 400) {
                return dispatch({type: SIGN_UP_FAILURE, response});
            } else if (response.Error) {
                alert(`Error: ${response.Error}`);
            } else if (response.accessToken) {
                localStorage.setItem('accessToken', response.accessToken);
                const title = 'Thanks for joining Your Notes. We sent a confirmation to your email.';
                const reason = 'SignUp success.';

                return dispatch({
                    type: ACTIVATE_MODAL_WINDOW,
                    title,
                    reason
                });
            }
        })
        .catch(error => console.error(`Ошибка: ${error}`));
}