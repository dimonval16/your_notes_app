import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HeaderContainer from './containers/HeaderContainer';
import SidebarContainer from './containers/SidebarContainer';
import MainContentContainer from './containers/MainContentContainer';
import Slogan from './components/Slogan/Slogan';
import './App.css';

function App(props) {
  const sloganRef = React.createRef();
  const appRef = React.createRef();

  return (
    <BrowserRouter>
      <div className="App" ref={appRef}>
        <HeaderContainer sloganRef={sloganRef} appRef={appRef} />
        <SidebarContainer store={props.store} />
        <Slogan store={props.store} sloganRef={sloganRef} />
        <MainContentContainer store={props.store} />
      </div>
    </BrowserRouter>
  );
}

export default App;