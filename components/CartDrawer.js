// components/CartDrawer.js
import { useCart } from './CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartDrawer() {
  const { cart, isOpen, setIsOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <>
        <motion.div
          className="drawer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
        <motion.div
          className="cart-drawer"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25 }}
        >
          <button className="close-drawer" onClick={() => setIsOpen(false)}>×</button>
          
          <h2>🛍️ Tu Carrito</h2>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#999', marginTop: '2rem' }}>
                Tu carrito está vacío
              </p>
            ) : (
              cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="cart-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img 
                    src={item.Imagen?.split(',')[0] || '/placeholder.jpg'} 
                    alt={item.Nombre}
                  />
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.Nombre}</div>
                    <div className="cart-item-price">€{item.Precio}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ padding: '0.2rem 0.5rem', borderRadius: '4px' }}
                      >-</button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ padding: '0.2rem 0.5rem', borderRadius: '4px' }}
                      >+</button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        style={{ marginLeft: 'auto', color: '#ff4b7a', background: 'none', border: 'none', cursor: 'pointer' }}
                      >🗑️</button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
          
          {cart.length > 0 && (
            <>
              <div className="cart-total">
                Total: €{getCartTotal().toFixed(2)}
              </div>
              <button className="checkout-btn">
                Finalizar Compra
              </button>
            </>
          )}
        </motion.div>
      </>
    </AnimatePresence>
  );
}