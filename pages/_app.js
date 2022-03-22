import "../styles/globals.css";
import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout page={`Insight AM`} className="z-[9999]">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
