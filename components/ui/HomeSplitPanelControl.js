import { motion } from "framer-motion";

export default function HomeSplitPanelControl({
  studiesNumber,
  panelScrollIndex,
  handleSplitPanelControlClick,
}) {
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
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 0 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(panelScrollIndex)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 1 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(panelScrollIndex)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 2 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(panelScrollIndex)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 3 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(panelScrollIndex)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 4 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(panelScrollIndex)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 5 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(panelScrollIndex)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 6 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(panelScrollIndex)}
        ></motion.li>
      </motion.ul>
    </div>
  );
}
