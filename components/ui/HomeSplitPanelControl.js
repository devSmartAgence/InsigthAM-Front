import { motion } from "framer-motion";

export default function HomeSplitPanelControl({
  studiesNumber,
  panelScrollIndex,
  handleSplitPanelControlClick,
}) {
  //Animation control
  const sliderControl = {
    hidden: { x: 80 },
    show: {
      x: 0,
      transition: {
        delay: 1.5,
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  // const [sliderControlIndex, setSliderControlIndex] = useState("");

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
    <div className="fixed z-10 top-[calc(50vh-77px)] right-[30px]">
      <motion.ul variants={sliderControl} animate="show" initial="hidden">
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 0 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(0)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 1 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(1)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 2 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(2)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 3 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(3)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 4 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(4)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 5 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(5)}
        ></motion.li>
        <motion.li
          className={
            "rounded-full bg-transparent border-[1px] w-[0.7vmax] h-[0.7vmax] mb-[30px]"
          }
          variants={
            panelScrollIndex === 6 ? bulletPointActive : bulletPointInactive
          }
          animate="show"
          onClick={() => handleSplitPanelControlClick(6)}
        ></motion.li>
      </motion.ul>
    </div>
  );
}
