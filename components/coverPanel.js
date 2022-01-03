import { motion, transform } from "framer-motion";

import GridPattern from "./ui/GridPattern";

export default function CoverPanel({ index, itemsCount, cover, translateY }) {
  console.log("ITEMS COUNT ===>", itemsCount);
  return (
    <div className="w-screen h-[calc(100vh-110px)]">
      <div className={`flex flex-row h-[calc(100vh-110px)]`}>
        {/* COVER PANEL */}
        <motion.div
          className={`bg-bottom flex w-1/2 items-center justify-center h-[calc(100vh-110px)] ${
            index % 2 === 0
              ? `translate-x-[-50vw]`
              : `translate-y-[calc(-1*(2*100vh-(2*110px)))]`
          }`}
          initial={index % 2 === 0 ? { x: "-50vw", y: 0 } : { x: 0 }}
          animate={index % 2 === 0 ? { y: translateY } : { y: -translateY }}
          transition={{ ease: "anticipate", duration: 2 }}
        >
          <GridPattern color={"deep-blue"} cover={cover} />
        </motion.div>
      </div>
    </div>
  );
}
