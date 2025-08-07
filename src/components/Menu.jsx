import '../styles/Menu.css';
import menuItems from '../data/menu.json';

const Menu = () => (
  <section id="menu" className="menu">
    <h2>Our Signature Dishes</h2>
    <div className="menu-grid">
      {menuItems.map(item => (
        <div className="menu-card" key={item.id}>
          <img src={item.image} alt={item.name} className="menu-image" />
          <div className="menu-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="menu-price">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Menu;
