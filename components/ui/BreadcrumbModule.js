import { motion } from "framer-motion";
import Link from "next/link";
import BackButton from "./BackButton";
import { breadcrumbBeautyfier } from "../../utils/breadcrumbBeautyfier";
export default function BreadCrumModule({ modulePosition, style, arrPath }) {
  return (
    <motion.div
      className={`w-full fixed flex items-center max-w-[1230px] h-[60px] ${
        style == "light" ? "bg-beige" : "bg-deep-blue"
      } z-10 top-0`}
      animate={{ top: modulePosition }}
      transition={{ duration: 0.3, type: "ease" }}
    >
      <BackButton label={"Retour"} size={"small"} href="/" style={"dark"} />
      <div className="flex items-center ml-[30px]">
        <Link href="/" passHref>
          <div
            className={
              style === "light"
                ? "text-deep-blue text-[11px] cursor-pointer"
                : "text-white text-[11px]"
            }
          >
            Accueil&nbsp; &nbsp; &#x0003E;
          </div>
        </Link>
        {arrPath.map((path, index) => (
          <div
            key={index}
            className={
              style === "light"
                ? "text-deep-blue text-[11px] cursor-pointer"
                : "text-white text-[11px]"
            }
          >
            {breadcrumbBeautyfier(path)}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
