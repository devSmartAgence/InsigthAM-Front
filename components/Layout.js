import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, page }) {
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
      setIsAnimating(true);
    };

    const handleComplete = () => {
      setTimeout(() => {
        setIsAnimating(false);
        setPageLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (
    <>
      <Head>
        <title>{page}</title>
      </Head>
      <motion.div
        key="loadingScreen"
        className="flex flex-col items-center justify-center w-full h-full fixed z-[8888] bg-deep-blue"
        initial={{ width: 0 }}
        animate={
          isAnimating === true
            ? {
                width: "100%",
                transition: { duration: 0.5, ease: "easeIn" },
              }
            : {
                width: 0,
                transition: { duration: 0.5, ease: "easeOut", delay: 0.7 },
              }
        }
        exit={{ width: 0 }}
      >
        <motion.div
          className="w-[3vmax] flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={
            isAnimating === true
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, duration: 0.7, ease: "easeOut" },
                }
              : {
                  opacity: 0,
                  x: -50,
                  transition: { duration: 0.5, ease: "easeIn" },
                }
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 28.296 28.569"
          >
            <path
              id="Tracé_44"
              data-name="Tracé 44"
              d="M85.389,15.553l1.857-1.935,5.843,8.132h4.631l5.843-8.132,1.857,1.935v6.2h4.132V2.634h-4.132v7.731L95.405,0,85.389,10.364V2.634H81.257V21.751h4.132ZM95.405,5.274l5.309,5.469L95.405,18.31,90.1,10.742Z"
              transform="translate(-81.257)"
              fill="#fff"
            />
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="28.296"
              height="4.002"
              transform="translate(0 24.566)"
              fill="#fff"
            />
            <path
              id="Tracé_45"
              data-name="Tracé 45"
              d="M111.264,21.149l-1.947-2-1.946,2,1.946,2.731Z"
              transform="translate(-95.169 -10.199)"
              fill="#fff"
            />
          </svg>
        </motion.div>
      </motion.div>
      <Header />
      <main>{children}</main>
      {router.route !== "/" && <Footer />}
    </>
  );
}
