import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "./ui/Button";
import PageTransitionIn from "./PageTransition";
import { motion, AnimatePresence } from "framer-motion";
export default function Layout({ children, page }) {
  const router = useRouter();
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
            <ul className="flex items-center">
              <Link href="/about">
                <li
                  className={
                    router.pathname === "/about"
                      ? "mr-[50px] text-[12px] cursor-pointer uppercase text-pink"
                      : "mr-[50px] text-[12px] cursor-pointer uppercase text-deep-blue"
                  }
                >
                  À propos
                </li>
              </Link>
              <Link href="/thematiques">
                <li
                  className={
                    router.pathname === "/thematiques"
                      ? "mr-[50px] text-[12px] cursor-pointer uppercase text-pink"
                      : "mr-[50px] text-[12px] cursor-pointer uppercase text-deep-blue"
                  }
                >
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
        <footer className="h-[244px] bg-deep-blue flex items-center ">
          <div className="h-[160px] flex place-content-between w-screen">
            <div className="flex">
              <Link href="/">
                <img
                  className="h-16 ml-8 cursor-pointer mr-[60px]"
                  src="/insightAM_white.svg"
                  alt="Logo Insight AM"
                />
              </Link>
              <Link href="https://ww.google.fr">
                <img
                  className="h-16 ml-8 cursor-pointer"
                  src="/Linkedin.svg"
                  alt="Linkedin"
                />
              </Link>
            </div>
            <nav>
              <ul className="flex items-center text-deep-blue">
                <Link href="/about">
                  <li className="mr-[90px] text-[12px] text-white cursor-pointer uppercase">
                    À propos
                  </li>
                </Link>
                <Link href="/etudes">
                  <li className="mr-[90px] text-[12px] text-white cursor-pointer uppercase">
                    Nos études
                  </li>
                </Link>
                <Link href="/CGVCVU">
                  <li className="mr-[90px] text-[12px] text-white cursor-pointer uppercase">
                    CGV/CVU
                  </li>
                </Link>
                <Link href="/legal">
                  <li className="mr-[90px] text-[12px] text-white cursor-pointer uppercase">
                    MENTIONS LÉGALES
                  </li>
                </Link>
              </ul>
              <Button type={"secondary"} aspect={"dark"} label={"Contact"} />
            </nav>
          </div>
        </footer>
      </AnimatePresence>
    </>
  );
}
