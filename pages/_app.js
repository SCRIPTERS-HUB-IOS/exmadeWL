import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const brightness = localStorage.getItem('brightness') || 100;
    document.body.style.filter = `brightness(${brightness}%)`;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
