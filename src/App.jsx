import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Chef from './components/Chef';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <>
      <Header onToggleTheme={() => setDarkMode(prev => !prev)} />
      <Hero />
      <hr />
      <About />
      <hr />
      <Menu />
      <hr />
      <Chef />
      <hr />
      <Testimonials />
      <hr />
      <ReservationForm />
      <hr />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
