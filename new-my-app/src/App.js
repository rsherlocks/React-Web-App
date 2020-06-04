import React from 'react';
import logo from './logo.svg';
import './App.css';
import Arrow from './MyComponent/Arrow';
import State from './MyComponent/State';
import Hello from './MyComponent/Hello';
import Condationalifelse from './MyComponent/Condationifelse'
import Elementcondation from './MyComponent/ElementCondation'
import ForceUpdate from './MyComponent/ForceUpdate';


function App() {
  return (
    <div className="App">
    {/* <p>Rakib Hasan</p> */}
    <Arrow></Arrow>

    {/* <State></State> */}
    <Hello></Hello><br></br>
    <Condationalifelse></Condationalifelse>
    <Elementcondation></Elementcondation>
    <ForceUpdate></ForceUpdate>

    </div>
  );
}

export default App;
