import React from 'react';
import './App.css';
import Card from './Card.js';
import WordCounter from './WordCounter.js';
function App() {
  return (
    <div className="App"><br></br>
      <Card>
        <h1>Responsive Paragraph Word Counter</h1>
        <WordCounter/>
      </Card>
    </div>
  );
}

export default App;
