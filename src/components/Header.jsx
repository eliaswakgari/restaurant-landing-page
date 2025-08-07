import { useState } from 'react';
import '../styles/Header.css';

const Header = ({ onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    onToggleTheme(); // call parent darkMode state
  };

  return (
    <header className="header">
      <div className="logo">Gourmet Delight</div>

      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#menu" onClick={closeMenu}>Menu</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#reservations" onClick={closeMenu}>Reservations</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        {/* Toggle Switch */}
        <label className="theme-switch">
          <input type="checkbox" checked={isDark} onChange={handleThemeToggle} />
          <span className="slider"></span>
        </label>
      </nav>
    </header>
  );
};

export default Header;
