import Home from './Home';
import Footer from '../componentes/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Home/>
      <Footer/>
      <Component {...pageProps} />
    </>

  );
}
