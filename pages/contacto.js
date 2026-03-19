import React from 'react';

export default function Contacto() {
  return (
    <>
      <link rel="stylesheet" href="/styles/manga.css" />
      <div className="catalogo-container">
        <h1>Contacto</h1>
        <div style={{ background: '#fff0f6', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 16px #ff4b7a33' }}>
          <p>¿Tienes dudas o quieres un producto personalizado? Escríbeme:</p>
          <ul style={{ fontSize: '1.1rem', color: '#222' }}>
            <li>Email: <a href="mailto:akihabarastore@email.com" style={{ color: '#ff4b7a' }}>akihabarastore@email.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/34123456789" style={{ color: '#ff4b7a' }}>+34 123 456 789</a></li>
            <li>Instagram: <a href="https://instagram.com/akihabarastore" style={{ color: '#ff4b7a' }}>@akihabarastore</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
