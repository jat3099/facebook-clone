import React from 'react';
import './App.css';
import './Header.js';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header/>

      <div className="div app__body">
      <Sidebar/>
      <Feed/>
      </div>
      {/* Sidebar */}

      {/* Feed */}

      {/* Widgets */}

    </div>
  );
}

export default App;
