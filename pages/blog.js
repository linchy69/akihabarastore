import React from 'react';

export default function Blog() {
  return (
    <>
      <link rel="stylesheet" href="/styles/manga.css" />
      <div className="catalogo-container">
        <h1>Blog Manga</h1>
        <div style={{ background: '#fff0f6', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 16px #ff4b7a33' }}>
          <h2 style={{ color: '#ff4b7a' }}>Cómo hago mis productos artesanales</h2>
          <p>Descubre el proceso creativo detrás de cada bolso, cartera y figura 3D. ¡Cada pieza es única y hecha con pasión por el manga!</p>
          <h2 style={{ color: '#ff4b7a' }}>Novedades y lanzamientos</h2>
          <p>Próximamente: nuevos diseños inspirados en tus personajes favoritos. ¡Síguenos para no perderte nada!</p>
        </div>
      </div>
    </>
  );
}
