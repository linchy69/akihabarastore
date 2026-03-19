// pages/catalogo.js
import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import ProductGallery from '../components/ProductGallery';
import { useCart } from '../components/CartContext';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'products.json');
  const data = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : [];
  return { props: { products: data } };
}

export default function Catalogo({ products }) {
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const { addToCart } = useCart();

  const filtered = products.filter(product => {
    const nameMatch = product.Nombre?.toLowerCase().includes(search.toLowerCase()) || false;
    const min = minPrice ? parseFloat(minPrice) : 0;
    const max = maxPrice ? parseFloat(maxPrice) : Infinity;
    const price = parseFloat(product.Precio) || 0;
    return nameMatch && price >= min && price <= max;
  });

  return (
    <div className="container">
      <h1>✨ Catálogo de Productos</h1>
      
      {/* Filtros */}
      <div style={{ 
        marginBottom: '3rem', 
        display: 'flex', 
        gap: '1rem', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        background: '#fff',
        padding: '2rem',
        borderRadius: 'var(--border-radius-card)',
        boxShadow: 'var(--shadow-soft)'
      }}>
        <input
          type="text"
          placeholder="🔍 Buscar por nombre..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: '250px' }}
        />
        <input
          type="number"
          placeholder="Precio mínimo €"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          style={{ width: '150px' }}
        />
        <input
          type="number"
          placeholder="Precio máximo €"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          style={{ width: '150px' }}
        />
      </div>

      {/* Grid de productos */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem',
        justifyContent: 'center'
      }}>
        {filtered.length === 0 ? (
          <div style={{ 
            color: 'var(--color-primary)', 
            fontSize: '1.5rem',
            textAlign: 'center',
            padding: '3rem'
          }}>
            😿 No hay productos que coincidan con la búsqueda.
          </div>
        ) : (
          filtered.map((product, idx) => (
            <div key={idx} className="product-card">
              <ProductGallery 
                images={typeof product.Imagen === 'string' 
                  ? product.Imagen.split(',').map(img => img.trim()) 
                  : []} 
              />
              <div className="product-content">
                <div className="product-title">{product.Nombre}</div>
                <div className="product-desc">{product.Descripción}</div>
                <div className="product-price">{product.Precio}</div>
                <button 
                  className="buy-btn"
                  onClick={() => addToCart({...product, id: idx})}
                >
                  🛒 Añadir al Carrito
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}