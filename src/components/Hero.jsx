import '../styles/Hero.css';
//import heroVideo from '../assets/hero-video.mp4';

const Hero = () => (
  <section className="hero" id="home">
    <video className="hero-video" autoPlay muted loop playsInline>
      <source src="/A.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="hero-content">
      <h1>Experience the Taste of Elegance</h1>
      <a href="#reservations" className="cta-btn">Reserve Now</a>
    </div>
  </section>
);

export default Hero;
