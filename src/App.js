import React from 'react';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import './App.css'

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <div className="others"></div>
      </div>
    </div>
  );
}

export default App;
