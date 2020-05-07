import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './containers/HeaderContainer';
import SidebarContainer from './containers/SidebarContainer';
import MainContentContainer from './containers/MainContentContainer';
import SloganContainer from './containers/SloganContainer';
import FilterContainer from "./containers/FilterContainer";
import RegistrationFormContainer from "./containers/RegistrationFormContainer";
import './App.css';

function MainApplication(props) {
    return (
        <div className={props._needWrapper}>
            <HeaderContainer/>
            <SidebarContainer/>
            <SloganContainer/>
            <FilterContainer/>
            <MainContentContainer/>
        </div>
    );
}

function App(props) {
    const _needWrapper = props.sloganHidden ? 'AppThreeRows' : 'AppFourRows';
    const registered = props.registered;

    return registered ?
        <MainApplication _needWrapper={_needWrapper}/>
        :
        <RegistrationFormContainer/>;
}

function mapStateToProps(state) {
    return {
        sloganHidden: state.viewFields.sloganHidden,
        registered: state.registrationForm.registered
    };
}

export default connect(mapStateToProps)(App);