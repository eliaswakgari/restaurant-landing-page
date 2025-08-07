import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h3 className="logo">Gourmet Delight</h3>
<div className="socials">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="mailto:hello@gourmetdelight.et" aria-label="Email">
    <i className="fas fa-envelope"></i>
  </a>
</div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Gourmet Delight. All rights reserved.
      </p>
    </div>

    <a href="#top" className="back-to-top">↑ Back to Top</a>
  </footer>
);

export default Footer;