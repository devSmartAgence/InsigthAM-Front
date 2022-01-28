import { motion } from "framer-motion";

export default function PageTransitionIn() {
  return (
    <motion.div
      className="h-full bg-deep-blue absolute z-50"
      initial={{ width: "100vw" }}
      animate={{ width: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    ></motion.div>
  );
}
