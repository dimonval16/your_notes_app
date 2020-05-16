import React, { useEffect } from "react";
import '../../App.css';
import { connect } from 'react-redux';
import HeaderContainer from '../../containers/HeaderContainer';
import SidebarContainer from '../../containers/SidebarContainer';
import SloganContainer from '../../containers/SloganContainer';
import FilterContainer from '../../containers/FilterContainer';
import MainContentContainer from '../../containers/MainContentContainer';
import { getUserRequestAC, getCategoryInfo } from '../../redux/actions'

function MainPage(props) {
    const _needWrapper = props.sloganHidden ? 'AppThreeRows' : 'AppFourRows';

    useEffect(() => {
       console.log('useEffect in MainPage');
       props.onGetUserInfo();
       props.onGetCategoryInfo();
    });

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

function mapDispatchToProps(dispatch) {
    return {
        onGetCategoryInfo: () => dispatch(getCategoryInfo()),
        onGetUserInfo: () => dispatch(getUserRequestAC())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);