import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function Layout({ children, page }) {
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  };
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>

      <Header />
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
      >
        {children}
      </motion.main>
      <Footer />
    </>
  );
}
