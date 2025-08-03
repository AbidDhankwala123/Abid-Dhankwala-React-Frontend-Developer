import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderSidebar from "./components/HeaderSidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'theme1');

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  // Get font class based on current theme
  const getFontClass = () => {
    if (theme === 'theme1') return 'font-sans';
    if (theme === 'theme2') return 'font-serif';
    if (theme === 'theme3') return 'font-[Pacifico]';
    return '';
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, getFontClass }}>
      <Router>
        <div className="flex">
          <HeaderSidebar />
          <main className={`${theme === 'theme2' ? 'ml-64' : 'mt-16'} p-4`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;