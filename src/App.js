import React from 'react';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home/Home';
import './App.css'

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
