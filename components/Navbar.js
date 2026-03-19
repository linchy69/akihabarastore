// components/Navbar.js
import Link from 'next/link';
import { useCart } from './CartContext';

export default function Navbar() {
  const { getCartCount, setIsOpen } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar-manga">
      <ul>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/catalogo">Catálogo</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
        <li><Link href="/politicas">Políticas</Link></li>
        <li>
          <button onClick={() => setIsOpen(true)} className="cart-btn">
            🛒 Carrito
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
}