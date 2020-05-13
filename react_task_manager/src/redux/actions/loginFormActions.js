export const CHANGE_EMAIL_INPUT = 'CHANGE_EMAIL_INPUT';
export const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

export function logOutAC(history) {
    return {
        type: LOG_OUT,
        history
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

function loginSuccessAC(response, data) {
    return {
        type: LOGIN_SUCCESS,
        response,
        data
    }
}

export function loginRequestAC(url, data, history) {
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
                } else if (response.Error) {
                    alert(`Error: ${response.Error}`)
                } else {
                    localStorage.setItem('accessToken', response.accessToken);
                    history.push('/main');
                    return dispatch(loginSuccessAC(response, data));
                }
            })
            .catch(error => console.error(`Ошибка капець: ${error}`))
    }
}

