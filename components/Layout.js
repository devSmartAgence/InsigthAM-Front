import Head from "next/head";
import Link from "next/link";
import Button from "./ui/Button";
import PageTransitionIn from "./PageTransition";
import { motion, AnimatePresence } from "framer-motion";
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

      <AnimatePresence exitBeforeEnter initial={false}>
        <Head>
          <title>{page}</title>
        </Head>

        <header className="flex h-[110px] w-screen bg-white justify-between items-center pl-[70px] pr-[70px] fixed z-50 top-0">
          <Link href="/">
            <img
              className="h-16 ml-8 cursor-pointer"
              src="/insightAM.svg"
              alt="Logo Insight AM"
            />
          </Link>
          <nav>
            <ul className="flex items-center text-deep-blue">
              <Link href="/about">
                <li className="mr-[50px] text-[12px] cursor-pointer">
                  À propos
                </li>
              </Link>
              <Link href="/etudes">
                <li className="mr-[50px] text-[12px] cursor-pointer">
                  Nos études
                </li>
              </Link>
              <Button type={"secondary"} aspect={"light"} label={"Contact"} />
            </ul>
          </nav>
        </header>

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
      </AnimatePresence>
    </>
  );
}
