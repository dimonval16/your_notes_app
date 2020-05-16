import {
    HOST_SAMOHA,
    HOST_SASHKA,
    SIGN_UP_SAMOHA,
    SIGN_UP_SASHKA
} from '../requestsData/requestData'

export const CHANGE_REG_EMAIL_INPUT = 'CHANGE_REG_EMAIL_INPUT';
export const CHANGE_REG_NAME_INPUT = 'CHANGE_REG_NAME_INPUT';
export const CHANGE_REG_PASSWORD_INPUT = 'CHANGE_REG_PASSWORD_INPUT';
export const CHANGE_CONFIRM_PASSWORD_INPUT = 'CHANGE_CONFIRM_PASSWORD_INPUT';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

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

function signUpSuccessAC() {
    return {
        type: SIGN_UP_SUCCESS
    }
}

export const requestSignUpAC = (data) => dispatch => {
    const signUpSashka = HOST_SASHKA+SIGN_UP_SASHKA;
    const signUpSamoha = HOST_SAMOHA+SIGN_UP_SAMOHA;
    const activeUrl = signUpSamoha;

    const sashkaData = {
        email: data.email,
        password: data.password,
        username: data.name
    }

    fetch(activeUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(activeUrl === signUpSashka ? sashkaData : data)
    })
        .then(response => response.json())
        .then(response => {
            if(response.status >= 400) {
                alert(`Error ${response.status}: ${response.message}`);
            }
            else if (response.Error) {
                alert(`Error: ${response.Error}`);
            }
            else if (response.accessToken) {
                localStorage.setItem('accessToken', response.accessToken);
                alert('Congratulations! We sent a confirmation to your email.')
                return dispatch(signUpSuccessAC());
            }
        })
        .catch(error => console.error(`Ошибка: ${error}`))
}