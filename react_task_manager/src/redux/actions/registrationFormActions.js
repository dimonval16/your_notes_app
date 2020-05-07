export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const TRY_LOGIN = 'TRY_LOGIN';
export const LOG_OUT = 'LOG_OUT';

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

export function tryLoginAC() {
    return {
        type: TRY_LOGIN
    }
}

export function logOutAC() {
    return {
        type: LOG_OUT
    }
}