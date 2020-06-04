import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './mycomponent/Hello';
import Welcome from './mycomponent/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="South"></Welcome>
      <Welcome name="Asian"></Welcome> */}
      <Welcome name="Country"></Welcome>

      <Hello name="Bangladesh" age="1971"></Hello>
      {/* <Hello name="India" age="1948"></Hello>
      <Hello name="Pakistan" age="1948"></Hello> */}
      <p>Rakib Hasan</p>
    </div>
  );
}

export default App;
