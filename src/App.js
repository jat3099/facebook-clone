import React from 'react';
import './App.css';
import './Header.js';
import Header from './Header.js';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header/>

      <div className="div app__body">
      <Sidebar/>
      </div>
      {/* Sidebar */}

      {/* Feed */}

      {/* Widgets */}

    </div>
  );
}

export default App;
