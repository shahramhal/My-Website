import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import Link
import Home from './pages/home';
import Footer from './components/Footer';
import ScrollToSection from './ScrollToSection'; 
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
   
      <ScrollToSection />

      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-content">
            {/* Use Link component for the logo to go to the top */}
            <Link to="/" className="logo">Shahram Halimzoda</Link>
            <div className="nav-links">
              {/* IMPORTANT: Change all <a> tags to <Link> tags */}
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <button
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle theme"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            {/* All routes now point to the same Home component */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;