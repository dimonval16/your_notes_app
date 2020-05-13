export const CHANGE_REG_EMAIL_INPUT = 'CHANGE_REG_EMAIL_INPUT';
export const CHANGE_REG_NAME_INPUT = 'CHANGE_REG_NAME_INPUT';
export const CHANGE_REG_PASSWORD_INPUT = 'CHANGE_REG_PASSWORD_INPUT';
export const CHANGE_CONFIRM_PASSWORD_INPUT = 'CHANGE_CONFIRM_PASSWORD_INPUT';

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