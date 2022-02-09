import { motion, transform } from "framer-motion";
import useDeviceSize from "../components/hooks/useDevicesize";

import GridPattern from "./ui/GridPattern";

export default function CoverPanel({
  index,
  itemsCount,
  cover,
  itemPosition,
  itemHeight,
}) {
  const [width, height] = useDeviceSize();
  return (
    <div className="w-screen h-[calc(100vh-110px)]">
      <div
        className={`flex flex-row h-[calc(100vh-110px)] translate-y-[calc(-500vh+550px)]`}
      >
        {/* COVER PANEL */}
        <motion.div
          className={`bg-bottom flex w-1/2 items-center justify-center `}
          animate={{ y: -itemPosition }}
          transition={{ ease: "anticipate", duration: 1 }}
        >
          <GridPattern color={"deep-blue"} cover={cover} />
        </motion.div>
      </div>
    </div>
  );
}
