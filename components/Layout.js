import Head from "next/head";
import Header from "./Header";
import PageTransitionIn from "./PageTransition";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
export default function Layout({ children, page }) {
  //Page transition animation
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, transition: { ease: "circOut", duration: 0.3 } },
  };

  return (
    <>
      <PageTransitionIn />

      <AnimatePresence initial={false}>
        <Head>
          <title>{page}</title>
        </Head>

        <Header />

        <motion.main
          key={page}
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition="transition"
        >
          {children}
        </motion.main>
        <Footer />
      </AnimatePresence>
    </>
  );
}
