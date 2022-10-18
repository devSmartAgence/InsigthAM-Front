import { motion } from "framer-motion";
import Link from "next/link";
import BackButton from "./BackButton";
import { breadcrumbBeautyfier } from "../../utils/breadcrumbBeautyfier";
import { breadcrumbLinkManager } from "../../utils/breadcrumbBeautyfier copy";
import useDeviceSize from "../hooks/useDevicesize";
export default function BreadCrumbModule({ modulePosition, style, arrPath }) {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  if (viewportWidth > 992) {
    return (
      <motion.div
        className={`hidden md:z-10 md:top-0 md:bg-beige md:w-full md:fixed md:flex md:items-center md:max-w-[1230px] md:h-[60px] md:mt-10px${
          style == "light" ? "md:bg-beige" : "md:bg-deep-blue"
        }`}
        animate={{ top: modulePosition }}
        transition={{ duration: 0.3, type: "ease" }}
      >
        <BackButton label={"Retour"} size={"small"} href="/" style={"dark"} />
        <div className="flex items-center ml-[30px]">
          <Link href="/" passHref>
            <div
              className={
                style === "light"
                  ? "text-deep-blue text-[11px] cursor-pointer hover:underline"
                  : "text-white text-[11px] cursor-pointer hover:underline"
              }
            >
              Accueil
            </div>
          </Link>
          <span
            className={
              style === "light"
                ? "text-deep-blue text-[11px]"
                : "text-white text-[11px]"
            }
          >
            &nbsp; &nbsp; &#x0003E;
          </span>
          {arrPath.map((path, index) => {
            if (1 === 1) {
              <Link href={"/" + path} key={index} passHref>
                <div
                  className={
                    style === "light"
                      ? "text-deep-blue text-[11px] cursor-pointer hover:underline"
                      : "text-white text-[11px] cursor-pointer hover:underline"
                  }
                >
                  {breadcrumbBeautyfier(path)}
                </div>
              </Link>;
            }
          })}
        </div>
      </motion.div>
    );
  } else {
    return null;
  }
}
