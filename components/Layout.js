import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
