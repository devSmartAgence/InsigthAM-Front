import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import useDeviceSize from "../components/hooks/useDevicesize";
import { motion, AnimatePresence } from "framer-motion";
export default function Header() {
  const router = useRouter();
  const [width, height] = useDeviceSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = {
    initial: { opacity: 0, translateX: -50 },
    animate: { opacity: 1, translateX: 0 },
    exit: { opacity: 0, translateX: 50 },
  };

  const menu = {
    initial: { height: 0 },
    animate: {
      height: "100vh",
      transition: { duration: 0.7, staggerChildren: 0.2, delayChildren: 0.4 },
    },
    exit: {
      height: 0,
      transition: { duration: 0.7, staggerChildren: 0.2, delay: 0.4 },
    },
  };
  return (
    <header className="flex h-[110px] w-screen bg-white justify-between items-center pl-[70px] pr-[70px] fixed z-50 top-0">
      <Link href="/" passHref>
        <div className="h-16 w-[105px] cursor-pointer relative">
          <Image
            src="/insightAM.svg"
            alt="Logo Insight AM"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>
      {width > 720 ? (
        <nav className="">
          <ul className="flex items-center">
            <Link href="/a-propos" passHref>
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
            <Link href="/nos-etudes" passHref>
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
            <Button type={"secondary"} style={"light"} label={"Contact"} />
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
                  className="flex flex-col items-center w-full bg-deep-blue fixed top-[110px] right-0 p-[60px]"
                  variants={menu}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Link href="/a-propos" passHref>
                    <motion.li
                      className={
                        router.pathname === "/a-propos"
                          ? "text-[36px] cursor-pointer uppercase text-pink mb-[30px]"
                          : "text-[36px] cursor-pointer uppercase text-white mb-[30px]"
                      }
                      variants={menuItems}
                    >
                      À propos
                    </motion.li>
                  </Link>
                  <Link href="/nos-etudes" passHref>
                    <motion.li
                      key="2"
                      className={
                        router.pathname === "/thematiques"
                          ? "text-[36px] cursor-pointer uppercase text-pink mb-[30px]"
                          : "text-[36px] cursor-pointer uppercase text-white mb-[30px]"
                      }
                      variants={menuItems}
                    >
                      Nos études
                    </motion.li>
                  </Link>
                  <motion.div
                    key="3"
                    variants={menuItems}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Button
                      type={"secondary"}
                      style={"dark"}
                      label={"Contact"}
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
