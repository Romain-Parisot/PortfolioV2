import React from 'react';
import Onloadanimation from './OnLoadAnimation/Onloadanimation';
import './App.module.css';
import Logoanimation from './LogoAnimation/Logoanimation';

export default function App() {
  return (
    <div className="App">
      <Onloadanimation />
      <Logoanimation />
    </div>
  );
}
