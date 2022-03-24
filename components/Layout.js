import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useDeviceSize from "./hooks/useDevicesize";

export default function Layout({ children, page }) {
  const router = useRouter();
  const [viewportWidth, viewportHeight] = useDeviceSize();
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
      }, 700);
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
        className={`flex flex-col items-center justify-center w-screen h-screen fixed z-[9999] bg-deep-blue top-[${
          viewportWidth > 992 ? "110px" : "75px"
        }]`}
        initial={{ width: 0 }}
        animate={
          isAnimating === true
            ? {
                width: "100%",
                transition: { duration: 0.4, ease: "easeIn" },
              }
            : {
                width: 0,
                transition: { duration: 0.4, ease: "easeOut", delay: 0.5 },
              }
        }
        exit={{ width: 0 }}
      >
        <motion.div
          className="w-[125px] flex flex-col items-center -mt-28 "
          initial={{ opacity: 0, x: -50 }}
          animate={
            isAnimating === true
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
                }
              : {
                  opacity: 0,
                  x: -50,
                  transition: { duration: 0.3, ease: "easeIn" },
                }
          }
        >
          <div>
            <Image
              src="https://res.cloudinary.com/smartagence/image/upload/v1645461568/Logo_Insight-AM_blanc_zbuvut.svg"
              alt="Logo Insight AM"
              width="200px"
              height="200px"
            />
          </div>
          <div>
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="8.042%"
                  y1="0%"
                  x2="65.682%"
                  y2="23.865%"
                  id="a"
                >
                  <stop stopColor="#fff" stopOpacity="0" offset="0%" />
                  <stop stopColor="#fff" stopOpacity=".631" offset="63.146%" />
                  <stop stopColor="#fff" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)">
                  <path
                    d="M36 18c0-9.94-8.06-18-18-18"
                    id="Oval-2"
                    stroke="url(#a)"
                    strokeWidth="2"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <circle fill="#fff" cx="36" cy="18" r="1">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </g>
            </svg>
          </div>
        </motion.div>
      </motion.div>
      {/* <motion.div
        key="loadingScreen"
        className={`flex flex-col items-center justify-center w-screen h-screen fixed z-[9998] bg-white top-[${
          viewportWidth > 992 ? "110px" : "75px"
        }]`}
        initial={{ opacity: 0 }}
        animate={
          isAnimating === true
            ? {
                opacity: 1,
                transition: { duration: 0.2, ease: "easeIn" },
              }
            : {
                opacity: 0,
                transition: { duration: 0.4, ease: "easeOut", delay: 0.5 },
              }
        }
        exit={{ width: 0 }}
      ></motion.div> */}
      <Header router={router} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={
          isAnimating === true
            ? {
                opacity: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              }
            : {
                opacity: 1,
                transition: { duration: 0.4, ease: "easeOut", delay: 0.5 },
              }
        }
      >
        {children}
      </motion.main>

      {router.route !== "/" && <Footer />}
    </>
  );
}
