import React from 'react';
import ColorGame from './components/ColorGame';
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-color-game-dark font-Raleway text-base min-h-screen">
      <ColorGame />
      <Footer />
    </div>
  );
}

export default App;