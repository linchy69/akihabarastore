import React from 'react';

export default function Politicas() {
  return (
    <>
      <link rel="stylesheet" href="/styles/manga.css" />
      <div className="catalogo-container">
        <h1>Políticas de la Tienda</h1>
        <div style={{ background: '#fff0f6', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 16px #ff4b7a33' }}>
          <h2 style={{ color: '#ff4b7a' }}>Envíos</h2>
          <p>Envíos a toda España. Tiempo estimado: 3-7 días laborables.</p>
          <h2 style={{ color: '#ff4b7a' }}>Devoluciones</h2>
          <p>Si el producto no cumple tus expectativas, puedes devolverlo en 14 días.</p>
          <h2 style={{ color: '#ff4b7a' }}>Privacidad</h2>
          <p>Tu información está protegida y solo se usa para gestionar tu pedido.</p>
        </div>
      </div>
    </>
  );
}
