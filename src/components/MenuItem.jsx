import '../styles/MenuItem.css'; // Adjust the path as necessary

const MenuItem = ({ name, description, price, image }) => {
  return (
    <div className="menu-item">
      <img src={image} alt={name} />
      <div className="menu-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default MenuItem;
