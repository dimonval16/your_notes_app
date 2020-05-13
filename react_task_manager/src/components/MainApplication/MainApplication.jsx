import React from "react";
import '../../App.css';
import { connect } from 'react-redux';
import HeaderContainer from "../../containers/HeaderContainer";
import SidebarContainer from "../../containers/SidebarContainer";
import SloganContainer from "../../containers/SloganContainer";
import FilterContainer from "../../containers/FilterContainer";
import MainContentContainer from "../../containers/MainContentContainer";

function MainApplication(props) {
    const _needWrapper = props.sloganHidden ? 'AppThreeRows' : 'AppFourRows';

    return (
        <div className={_needWrapper}>
            <HeaderContainer/>
            <SidebarContainer/>
            <SloganContainer/>
            <FilterContainer/>
            <MainContentContainer/>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        sloganHidden: state.viewFields.sloganHidden
    };
}

export default connect(mapStateToProps)(MainApplication);