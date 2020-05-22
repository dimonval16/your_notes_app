import React from 'react';
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

export default function LoginFormHandler(props) {
    function handleGoogleButton(e) {
        e.preventDefault();
        console.log('Google Login Click');
    }

    function handleEmailInput(e) {
        const inputText = e.target.value;
        props.onEmailInputChange(inputText);
    }

    function handlePasswordInput(e) {
        const inputText = e.target.value;
        props.onPasswordInputChange(inputText);
    }

    function handleLoginSubmit(e) {
        e.preventDefault();

        const data = {
            email: props.loginForm.email,
            password: props.loginForm.pass
        }
        props.onLogin(data);
    }

    return (
        <LoginForm
            email={props.loginForm.email}
            pass={props.loginForm.pass}
            err={props.loginForm.errorTitle}
            fetching={props.fetching}
            onHandleLoginSubmit={handleLoginSubmit}
            onHandleGoogleButton={handleGoogleButton}
            onHandleEmailInput={handleEmailInput}
            onHandlePasswordInput={handlePasswordInput}
        />
    );
}