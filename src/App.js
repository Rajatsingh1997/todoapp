import React from 'react';
import './components/App.css';
import Todolist from './components/Todolist';


function App() {
 
  return (
    <>
      <div className="App">
        <h1>TODO App</h1>
        <h3>Whats plans for Today!</h3>
        <Todolist/>
       
      </div>
    </>
  );
}

export default App;
