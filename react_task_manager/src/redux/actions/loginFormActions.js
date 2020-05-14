export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

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

function loginSuccessAC() {
    return {
        type: LOGIN_SUCCESS,
    }
}

export function loginRequestAC(url, data) {
    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(response => {
                if (response.status >= 400) {
                    alert(`Error ${response.status}: ${response.message}`);
                }
                else if (response.Error) {
                    alert(`Error: ${response.Error}`);
                }
                else if (response.accessToken) {
                    localStorage.setItem('accessToken', response.accessToken);
                    return dispatch(loginSuccessAC());
                }
            })
            .catch(error => console.error(`Ошибка капець: ${error}`))
    }
}

