import React from 'react';
import { useCart } from './CartContext.jsx';
import './index.css'; 

const ProductCard = ({ product }) => {
  const { quantities, updateQuantity } = useCart(); 

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    updateQuantity(product.id, newQuantity); // Update the quantity in the context
  };

  const handleRemove = () => {
    alert('Remove functionality will be available soon');
    // Implement actual remove functionality if needed
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="sustainability">
          <label>Sustainability</label>
        </div>
      </div>
      <div className="card-controls">
        <select
          value={quantities[product.id]} // Get the current quantity from the context
          onChange={handleQuantityChange}
          className="quantity-selector"
        >
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <p className="price">${(product.price * quantities[product.id]).toFixed(2)}</p>
        <button onClick={handleRemove} className="remove-button">
          Remove
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
