import React from 'react'
import './App.scss';
import Deck from './components/deck';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Deck title="Table" path="table" />
        <Deck title="Hand" path="hand" />
      </header>
    </div>
  );
}

export default App;