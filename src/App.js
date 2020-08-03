import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Timer from './components/Timer';

function App() {
  return (
    <div className="center">
      <h2>useRef Hook</h2>
      <Input />
      <Timer />
    </div>
  );
}

export default App;
