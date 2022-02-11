import React from 'react';

// Importing UI components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Team />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
