import React from 'react';

// Importing UI components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Team from './components/Team';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Team />
      <Roadmap />
    </div>
  );
}

export default App;
