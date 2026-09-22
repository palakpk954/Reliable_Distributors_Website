import React from 'react';
import { useCart } from '../context/CartContext';
import './CartSidebar.css';

const CartSidebar = () => {
  const { cartItems, isCartOpen, toggleCart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleQuoteSubmit = () => {
    if (cartItems.length === 0) return;
    
    let message = "New RFQ Request:%0A%0A";
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.title}%0A`;
    });
    
    let whatsappURL = `https://wa.me/917976315557?text=${message}`;
    window.open(whatsappURL, "_blank");
    clearCart();
    toggleCart();
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
      
      {/* Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Quote Cart</h2>
          <button className="close-btn" onClick={toggleCart}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <ul className="cart-items">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="item-info">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="item-actions">
                    <div className="qty-controls">
                      <button onClick={() => updateQuantity(item.title, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.title, 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.title)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleQuoteSubmit}>
              Submit RFQ via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
