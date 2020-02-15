import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Slogan from './components/Slogan/Slogan';
import MainContent from './components/Main_content/MainContent'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Slogan />
      <MainContent />
    </div>
  );
}

export default App;
