import '../styles/About.css';
const About = () => (
  <section id="about" className="about-section">
    <div className="about-container">
<h2>About Us</h2>
      <div className="about-text">
        
              <div className="about-image">
        <img src='/bg.jpg' alt="Chef Signature" />
      </div>
      <div> 
        <p>
          At <strong>Gourmet Delight</strong>, we blend tradition and innovation to deliver a dining experience that’s truly unforgettable.
          Our story began with a passion for crafting exquisite flavors from fresh, locally sourced ingredients.
        </p>
        <p>
          From the moment you walk in, you’ll feel the warmth of our service and the elegance of our ambiance.
          Whether it’s a romantic dinner, a family celebration, or a business lunch, we make every meal memorable.
        </p>
        <p className="chef-quote">“Cooking is an art — we serve passion on a plate.”</p>
      </div>
      </div>
    </div>
  </section>
);

export default About;
