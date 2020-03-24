import React from 'react';
import { connect } from 'react-redux';

import HeaderContainer from './containers/HeaderContainer';
import SidebarContainer from './containers/SidebarContainer';
import MainContentContainer from './containers/MainContentContainer';
import SloganContainer from './containers/SloganContainer';
import './App.css';

const AppComponent = (props) => {
  const needWrapper = props.sloganHidden ? 'AppTwoRows' : 'AppThreeRows';

  return (
    <div className={needWrapper} >
      <HeaderContainer />
      <SidebarContainer />
      <SloganContainer />
      <MainContentContainer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    sloganHidden: state.viewFields.sloganHidden
  };
}

const App = connect(mapStateToProps)(AppComponent);

export default App;