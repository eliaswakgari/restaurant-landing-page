import '../styles/Contact.css';

const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>

    <div className="contact-wrapper">
      <div className="contact-info">
        <p><strong>📍 Address:</strong>Happiness Restaurant Restaurant Bole, Addis Ababa</p>
        <p><strong>📞 Phone:</strong> (123) 456-7890</p>
        <p><strong>✉️ Email:</strong> hello@gourmetdelight.com</p>
        <p><strong>⏰ Opening Hours:</strong> Mon–Sun: 12pm – 10pm</p>
      </div>

      <div className="map-container">
  <iframe
    title="Map of Addis Ababa"
    className="map"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.571070924222!2d38.79169631743571!3d8.989895161228633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850da3fe2d6b%3A0xc8d2c39cd72e1d8c!2sHappiness%20Restaurant!5e1!3m2!1sen!2set!4v1754293978919!5m2!1sen!2set" width="600" height="450" style={{border:"0"}}   referrerpolicy="no-referrer-when-downgrade"></iframe></div>
<a
  href="https://www.google.com/maps/dir/?api=1&destination=Happiness+Restaurant+Bole+Addis+Ababa"
  target="_blank"
  rel="noopener noreferrer"
  className="directions-btn"
>
  Get Directions
</a>

    </div>
  </section>
);

export default Contact;
