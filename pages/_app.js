// pages/_app.js
import { CartProvider } from '../components/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import '../styles/globals.css'; // Importamos los estilos unificados

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <CartDrawer />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  );
}