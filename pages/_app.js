import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} key={Component} />;
}

export default MyApp;
