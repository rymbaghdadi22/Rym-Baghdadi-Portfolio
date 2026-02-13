import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ScrollTransition = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }}>
      {children}
    </motion.div>
  );
};