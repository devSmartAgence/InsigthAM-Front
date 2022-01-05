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
  console.log("HEIGHT COVER =====>", height);

  return (
    <div className="w-screen h-[calc(100vh-110px)]">
      <div
        className={`flex flex-row h-[calc(100vh-110px)] translate-y-[calc(-300vh+330px)]`}
      >
        {/* COVER PANEL */}
        <motion.div
          className={`bg-bottom flex w-1/2 items-center justify-center `}
          initial={false}
          animate={{ y: -itemPosition }}
          transition={{ ease: "anticipate", duration: 2 }}
        >
          <GridPattern color={"deep-blue"} cover={cover} />
        </motion.div>
      </div>
    </div>
  );
}
