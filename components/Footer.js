// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-manga">
      <div className="footer-content">
        <div className="footer-section">
          <h3>AkihabaraStore</h3>
          <p>Tu tienda de manga y anime artesanal. Productos únicos hechos con amor para verdaderos fans.</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/catalogo">Catálogo</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Información</h3>
          <ul>
            <li><Link href="/politicas">Políticas de Envío</Link></li>
            <li><Link href="/politicas">Devoluciones</Link></li>
            <li><Link href="/politicas">Privacidad</Link></li>
            <li><Link href="/politicas">Términos y Condiciones</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://instagram.com/akihabarastore" target="_blank">📸 Instagram</a></li>
            <li><a href="https://facebook.com/akihabarastore" target="_blank">👥 Facebook</a></li>
            <li><a href="https://tiktok.com/@akihabarastore" target="_blank">🎵 TikTok</a></li>
            <li><a href="https://twitter.com/akihabarastore" target="_blank">🐦 Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 AkihabaraStore - Todos los derechos reservados</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.8 }}>
          Hecho con ❤️ para los verdaderos fans del manga y anime
        </p>
      </div>
    </footer>
  );
}