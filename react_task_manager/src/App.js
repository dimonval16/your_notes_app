import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Slogan from './components/Slogan/Slogan';
import MainContent from './components/Main_content/MainContent';

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Sidebar user={props.state.user} categories={props.state.categories}/>
      <Slogan sloganName={props.state.user.name}/>
      <MainContent notes={props.state.notes}/>
    </div>
  );
}

export default App;
