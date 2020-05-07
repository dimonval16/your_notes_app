import React from 'react';
import RegistrationStyles from './RegistrationForm.module.css';

export default function RegistrationForm(props) {
    const _wrapper = RegistrationStyles.wrapper;
    const _staticWord = RegistrationStyles.staticWord;
    const _itemStyle = RegistrationStyles.itemStyle;
    const _buttons = RegistrationStyles.buttons;
    const _input = RegistrationStyles.input;
    const _googleIcon = RegistrationStyles.googleIcon;
    const _googleBlock = RegistrationStyles.googleBlock;

    function handleGoogleLoginButton(e) {
        e.preventDefault();
        console.log('куку вась');
    }

    function handleLoginButton(e) {
        e.preventDefault();

        props.onLogin();
    }

    function handleEmailInput(e) {
        const inputText = e.target.value;

        props.onEmailInputChange(inputText);
    }

    function handlePasswordInput(e) {
        const inputText = e.target.value;

        props.onPasswordInputChange(inputText);
    }

    return (
        <div>
            <form className={_wrapper}>
                <button
                    className={`${_itemStyle} ${_buttons} ${_googleBlock}`}
                    onClick={handleGoogleLoginButton}
                >
                    <div className={_googleIcon}></div>
                    <div>Log in with Google</div>
                </button>
                <span className={_staticWord}>or</span>
                <input
                    className={`${_itemStyle} ${_input}`}
                    type='text'
                    placeholder='Email'
                    value={props.registrationForm.email}
                    onChange={handleEmailInput}
                />
                <input
                    className={`${_itemStyle} ${_input}`}
                    type='password'
                    placeholder='Password'
                    value={props.registrationForm.pass}
                    onChange={handlePasswordInput}
                />
                <button
                    className={`${_itemStyle} ${_buttons}`}
                    onClick={handleLoginButton}
                >
                    Log in
                </button>
            </form>
        </div>
    );
}