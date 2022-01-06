import { motion } from "framer-motion";

export default function HomeSplitPanelControl({
  studiesNumber,
  panelScrollIndex,
  height,
  handleSplitPanelControlClick,
}) {
  const itemNumbers = Array.from(Array(studiesNumber).keys());
  let test = 0;
  //Animation control
  const sliderControl = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const bulletPointActive = {
    hidden: {
      backgroundColor: "#11ffee00",
      borderColor: "#D3D0CB",
      translateX: 50,
    },
    show: {
      translateX: 0,
      backgroundColor: "#CB286B",
      borderColor: "#CB286B",
    },
  };

  const bulletPointInactive = {
    hidden: {
      backgroundColor: "#11ffee00",
      borderColor: "#D3D0CB",
      translateX: 50,
    },
    show: {
      translateX: 0,
      backgroundColor: "#11ffee00",
      borderColor: "#D3D0CB",
    },
  };

  return (
    <div className="fixed z-10 top-1/2 right-[30px]">
      <motion.ul variants={sliderControl} animate="show" initial="hidden">
        {itemNumbers.map((i) => (
          <motion.li
            className={
              "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
            }
            variants={
              panelScrollIndex === i ? bulletPointActive : bulletPointInactive
            }
            animate="show"
            key={i}
            onClick={() => handleSplitPanelControlClick(i)}
          ></motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
