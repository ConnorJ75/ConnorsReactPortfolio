import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const navClick = (page) => {
    setCurrentPage(page); 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Connor's React Portfolio</h1>
        <Nav />
            
          
      </header>
      <main className="App-main">
        {currentPage === 'about' && <AboutMe />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'resume' && <Resume />}
      </main>
    </div>
  );
}

// Define your different components here
const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>This is the About Me page.</p>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>This is the Portfolio page.</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <p>This is the Contact page.</p>
    </div>
  );
};

const Resume = () => {
  return (
    <div>
      <h2>Resume</h2>
      <p>This is the Resume page.</p>
    </div>
  );
};

export default App;
