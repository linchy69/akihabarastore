
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AkihabaraStore | Tienda Manga Artesanal</title>
        <meta name="description" content="AkihabaraStore: tienda online de bolsos, carteras y figuras 3D artesanales inspiradas en manga y anime. Diseño profesional, catálogo automatizado y estilo manga." />
        <meta name="keywords" content="AkihabaraStore, tienda manga, anime, artesanía, bolsos, carteras, figuras 3D, catálogo, profesional, España" />
        <meta name="author" content="AkihabaraStore" />
      </Head>
      <link rel="stylesheet" href="/styles/banner.css" />
      <div className="banner-manga" role="banner" aria-label="Banner principal AkihabaraStore">
        <h1 style={{ color: '#fff', fontFamily: 'Bangers, Nunito, cursive', fontSize: '3rem', textShadow: '2px 2px 8px #ff4b7a' }}>
          AkihabaraStore
        </h1>
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ color: '#ff4b7a', fontFamily: 'Nunito, cursive' }}>¡Bienvenido a la tienda manga más profesional y sorprendente!</h2>
        <p style={{ fontSize: '1.2rem', color: '#222' }}>
          Descubre bolsos, carteras y figuras 3D artesanales inspiradas en tus personajes favoritos de anime y manga.
        </p>
      </div>
    </>
  );
}
