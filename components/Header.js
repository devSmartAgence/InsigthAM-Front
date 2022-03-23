import Link from "next/link";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import useDeviceSize from "../components/hooks/useDevicesize";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const router = useRouter();
  console.log(router.asPath.split("/")[1]);
  const [viewportWidth, height] = useDeviceSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    initial: { opacity: 0, translateX: -50 },
    animate: { opacity: 1, translateX: 0 },
    exit: { opacity: 0, translateX: 100, transition: { duration: 0.3 } },
  };

  const menu = {
    initial: { height: 0 },
    animate: {
      height: "100vh",
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        delayChildren: 0.4,
        ease: "circOut",
      },
    },
    exit: {
      height: 0,
      transition: { duration: 0.7, staggerChildren: -0.2, delay: 0.4 },
    },
  };

  let handleLogoClick = () => {
    if (router.asPath === "/") {
      router.reload(window.location.pathname);
    }
  };
  return (
    <header
      className={`flex ${
        viewportWidth > 992 ? "h-[110px]" : "h-[75px]"
      } w-screen bg-white justify-between items-center px-8  fixed z-50 top-0`}
    >
      <Link href="/" passHref>
        <div
          className="h-12 w-[100px] cursor-pointer relative md:h-16 w-[105px]"
          onClick={() => handleLogoClick()}
        >
          <Image
            src="https://res.cloudinary.com/smartagence/image/upload/v1645461453/Logo_Insight-AM-Blue_qksdzv.svg"
            alt="Logo Insight AM"
            layout="fill"
            objectFit="contain"
            priority="true"
          />
        </div>
      </Link>
      {viewportWidth > 720 ? (
        <nav className="">
          <ul className="flex items-center">
            <Link href="/a-propos">
              <li
                className={
                  router.pathname === "/a-propos"
                    ? "mr-[50px] text-[12px] cursor-pointer uppercase text-pink"
                    : "mr-[50px] text-[12px] cursor-pointer uppercase text-deep-blue"
                }
              >
                À propos
              </li>
            </Link>
            <Link href="/nos-etudes">
              <li
                className={
                  router.pathname === "/nos-etudes"
                    ? "mr-[50px] text-[12px] cursor-pointer uppercase text-pink"
                    : "mr-[50px] text-[12px] cursor-pointer uppercase text-deep-blue"
                }
              >
                Nos études
              </li>
            </Link>
            <SecondaryButton
              type={"secondary"}
              label={"Contact"}
              href={`/contact`}
            />
          </ul>
        </nav>
      ) : (
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="flex flex-col h-[24px] justify-between">
            <motion.div
              className="w-[35px] h-[4px] bg-deep-blue origin-center	"
              initial={{ rotate: 0 }}
              animate={
                isMenuOpen ? { rotate: 45, translateY: 10 } : { rotate: 0 }
              }
            ></motion.div>
            <motion.div
              className="w-[35px] h-[4px] bg-deep-blue origin-center"
              initial={{ opacity: 1 }}
              animate={isMenuOpen ? { opacity: 0, rotate: 45 } : { opacity: 1 }}
            ></motion.div>
            <motion.div
              className="w-[35px] h-[4px] bg-deep-blue origin-center	"
              initial={{ rotate: 0 }}
              animate={
                isMenuOpen ? { rotate: -45, translateY: -10 } : { rotate: 0 }
              }
            ></motion.div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <nav>
                <motion.ul
                  key="1"
                  className={`flex flex-col items-center w-full bg-deep-blue fixed ${
                    viewportWidth > 992 ? "top-[110px]" : "top-[75px]"
                  } right-0 p-[60px]`}
                  variants={menu}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link href="/">
                    <motion.li
                      className={
                        router.pathname === "/"
                          ? "text-[28px] cursor-pointer uppercase text-pink mb-[30px]"
                          : "text-[28px] cursor-pointer uppercase text-white mb-[30px]"
                      }
                      variants={menuItems}
                    >
                      Accueil
                    </motion.li>
                  </Link>
                  <Link href="/a-propos">
                    <motion.li
                      className={
                        router.asPath.split("/")[1] === "a-propos"
                          ? "text-[28px] cursor-pointer uppercase text-pink mb-[30px]"
                          : "text-[28px] cursor-pointer uppercase text-white mb-[30px]"
                      }
                      variants={menuItems}
                    >
                      À propos
                    </motion.li>
                  </Link>
                  <Link href="/nos-etudes">
                    <motion.li
                      key="2"
                      className={
                        router.asPath.split("/")[1] === "nos-etudes"
                          ? "text-[28px] cursor-pointer uppercase text-pink mb-[30px]"
                          : "text-[28px] cursor-pointer uppercase text-white mb-[30px]"
                      }
                      variants={menuItems}
                    >
                      Nos études
                    </motion.li>
                  </Link>
                  <motion.div key="3" variants={menuItems}>
                    <PrimaryButton
                      type={"secondary"}
                      style={"dark"}
                      label={"Contact"}
                      href={`/contact`}
                    />
                  </motion.div>
                </motion.ul>
              </nav>
            )}
          </AnimatePresence>
        </div>
      )}
    </header>
  );
}
