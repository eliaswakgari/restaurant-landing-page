import '../styles/Chef.css';
const Chef = () => (
  <section id="chef" className="chef-section">
    <div className="chef-container">
      <div className="chef-image">
        <img src='/chef.jpg' alt="Head Chef" />
      </div>
      <div className="chef-info">
        <h2>Meet Our Chef</h2>
        <p>
          Chef <strong>Abebe Tesfaye</strong> brings over 20 years of culinary experience from across Europe and Africa.
          His passion lies in blending traditional Ethiopian flavors with modern fine dining techniques.
        </p>
        <blockquote>
          “Cooking is an art — we serve passion on a plate.”
        </blockquote>
        <p className="signature">— Chef Abebe Tesfaye</p>
      </div>
    </div>
  </section>
);

export default Chef;
