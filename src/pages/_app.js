import Home from './Home';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Home/>
      <Component {...pageProps} />
    </>

  );
}
