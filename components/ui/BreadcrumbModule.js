import { motion } from "framer-motion";

import Button from "./Button";

export default function BreadCrumModule({ modulePosition, style }) {
  return (
    <motion.div
      className={`w-full fixed flex items-center max-w-[1230px] h-[60px] ${
        style == "light" ? "bg-beige" : "bg-deep-blue"
      } z-10 top-0`}
      animate={{ top: modulePosition }}
      transition={{ duration: 0.3, type: "ease" }}
    >
      <Button label={"Retour"} size={"small"} />
      <div className="flex items-center ml-[30px]">
        <div
          className={
            style === "light"
              ? "text-deep-blue text-[11px]"
              : "text-white text-[11px]"
          }
        >
          Étude
        </div>
        <div
          className={
            style === "light"
              ? "text-deep-blue text-[11px]"
              : "text-white text-[11px]"
          }
        >
          &#x3e;
        </div>
        <div
          className={
            style === "light"
              ? "text-deep-blue text-[11px]"
              : "text-white text-[11px]"
          }
        >
          Étude référencement thématique
        </div>
        <div
          className={
            style === "light"
              ? "text-deep-blue text-[11px]"
              : "text-white text-[11px]"
          }
        >
          &#x3e;
        </div>

        <div
          className={
            style === "light"
              ? "text-deep-blue text-[11px] text-light-blue"
              : "text-white text-[11px] text-light-blue"
          }
        >
          Fonds en Euros : quelle place demain dans l’épargne des Français ?
          Titre long lorem dolor consectetur adipiscing (H1)
        </div>
      </div>
    </motion.div>
  );
}
