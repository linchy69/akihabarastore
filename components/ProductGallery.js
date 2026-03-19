// components/ProductGallery.js
import { useState } from 'react';
import Image from 'next/image';

export default function ProductGallery({ images = [] }) {
  const [mainImage, setMainImage] = useState(images[0] || '/placeholder.jpg');

  if (!images || images.length === 0) {
    return (
      <div className="product-gallery">
        <div className="gallery-main">
          <img src="/placeholder.jpg" alt="Producto sin imagen" />
        </div>
      </div>
    );
  }

  return (
    <div className="product-gallery">
      <div className="gallery-main">
        <img 
          src={mainImage} 
          alt="Producto principal"
          onClick={() => window.open(mainImage, '_blank')}
        />
      </div>
      {images.length > 1 && (
        <div className="gallery-thumbnails">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`thumbnail ${mainImage === img ? 'active' : ''}`}
              onClick={() => setMainImage(img)}
            >
              <img src={img} alt={`Vista ${idx + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}