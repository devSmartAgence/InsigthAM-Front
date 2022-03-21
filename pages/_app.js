import "../styles/globals.css";
import Layout from "../components/Layout";
import SimpleReactLightbox from "simple-react-lightbox";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  return (
    <Layout page={`Insight AM`} className="z-[9999]">
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </Layout>
  );
}

export default MyApp;
