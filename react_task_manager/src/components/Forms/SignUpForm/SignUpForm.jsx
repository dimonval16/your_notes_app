import React from "react";
import {Link} from "react-router-dom";
import sSignUp from "./SignUpForm.module.css";
import AppTitle from "../../AppTitle/AppTitle";
import FormsInput from "../FormsInput/FormsInput";

export default function SignUpForm(props) {
    const _wrapper = sSignUp.wrapper;
    const _registered = sSignUp.registered;
    const _errorMes = sSignUp.errorMes;
    const _errorMesHid = sSignUp.errorMesHid;

    return (
        <form className={_wrapper} onSubmit={props.onHandleSignUpSubmit}>
            <AppTitle/>
            <FormsInput
                type='email'
                placeholder='Email'
                value={props.email}
                onChange={props.onHandleRegEmailInput}
            />
            <FormsInput
                type='text'
                maxLength={'16'}
                placeholder='Name'
                value={props.name}
                onChange={props.onHandleNameInput}
            />
            <FormsInput
                type='password'
                minLength={'6'}
                placeholder='Password'
                value={props.pass}
                onChange={props.onHandlePasswordInput}
            />
            <FormsInput
                type='password'
                minLength={'6'}
                placeholder='Confirm Password'
                value={props.confPass}
                onChange={props.onHandleConfirmPasswordInput}
            />
            <span className={props.err ? _errorMes : _errorMesHid}>Passwords are not equal.</span>
            <FormsInput
                type={'submit'}
                value={'Sign up'}
            />
            <Link to='/signin' className={`link ${_registered}`}>
                Have account? Sign In
            </Link>
        </form>
    );
}