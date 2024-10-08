import React from 'react';
import { CartProvider, useCart } from './CartContext.jsx';
import ProductCard from './ProductCard';

const AppContent = () => {
  const { products, subtotal } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <p>SUBTOTAL: ${subtotal.toFixed(2)}</p>
        <p>SHIPPING: FREE</p>
        <h3>Total: ${subtotal.toFixed(2)}</h3>
      </div>*/}
    <div className="cart-summary">
  <div className="summary-item">
    <span className="label">SUBTOTAL:</span>
    <span className="value">${subtotal.toFixed(2)}</span>
  </div>
  <div className="summary-item">
    <span className="label">SHIPPING:</span>
    <span className="value">FREE</span>
  </div>
  <div className="summary-item total">
    <span className="label">TOTAL:</span>
    <span className="value">${subtotal.toFixed(2)}</span>
  </div>
  <div className="promo">
    <a href="#" className="promo-link">
      Get Daily Cash With Nespola Card
    </a>
  </div>
</div>
</div>
  );
};

const App = () => (
  <CartProvider>
    <AppContent />
  </CartProvider>
);

export default App;
