import React, {useState} from 'react';
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";

export default function SignUpFormHandler(props) {
    const [err, setErr] = useState(false);

    function handleRegEmailInput(e) {
        const inputText = e.target.value;
        props.onEmailRegInputChange(inputText);
    }

    function handleNameInput(e) {
        const inputText = e.target.value;
        props.onNameRegInputChange(inputText);
    }

    function handlePasswordInput(e) {
        const inputText = e.target.value;
        props.onPasswordRegInputChange(inputText);
    }

    function handleConfirmPasswordInput(e) {
        const inputText = e.target.value;
        props.regForm.pass !== inputText ? setErr(true) : setErr(false);
        props.onPasswordConfirmInputChange(inputText);
    }

    function handleSignUpSubmit(e) {
        e.preventDefault();

        if (props.regForm.pass === props.regForm.confirmPass) {
            const data = {
                confirmPassword: props.regForm.confirmPass,
                email: props.regForm.email,
                name: props.regForm.name,
                password: props.regForm.pass
            }
            props.onSignUp(data);
        }
    }

    return (
        <SignUpForm
            email={props.regForm.email}
            name={props.regForm.name}
            pass={props.regForm.pass}
            confPass={props.regForm.confirmPass}
            err={err}
            fetching={props.fetching}
            errTitle={props.regForm.errorTitle}
            onHandleSignUpSubmit={handleSignUpSubmit}
            onHandleRegEmailInput={handleRegEmailInput}
            onHandleNameInput={handleNameInput}
            onHandlePasswordInput={handlePasswordInput}
            onHandleConfirmPasswordInput={handleConfirmPasswordInput}
        />
    );
}