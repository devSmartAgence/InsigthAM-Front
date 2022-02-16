import { motion } from "framer-motion";

export default function AnimatedH1Type({ title, className }) {
  const container = {
    hidden: {},
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        duration: 1,
        type: "tween",
      },
    },
  };

  const letter = {
    hidden: { y: 200 },
    show: {
      y: 0,

      transition: { duration: 1, type: "spring" },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {title.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>
            {/* If one of the character is a white space, then  effectivly replace it by a white space */}
            {char === " " ? (char = char.replace(/ /g, "\u00a0")) : char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}
