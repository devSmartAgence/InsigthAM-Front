import { motion } from "framer-motion";

export default function PageTransitionIn() {
  return (
    <motion.div
      className="h-full bg-pink absolute z-999"
      initial={{ width: "100vw" }}
      animate={{ width: 0 }}
      transition={{ duration: 1, ease: "circOut" }}
    ></motion.div>
  );
}
