"use client";
import React, { useEffect } from "react";
import { motion,useScroll,useAnimationControls } from "framer-motion";
import { BsRocketFill } from "react-icons/bs";

const ScrollToTop = () => {
  const ScrollToTopContainerVariants = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  const { scrollYProgress } = useScroll();
  const controls = useAnimationControls();

  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    return scrollYProgress.on("change", (latestValue) => {
      if (latestValue > 0.1) {
        controls.start("show");
      } else {
        controls.start("hide");
      }
    });
  });

  return (
    <motion.button
      className="fixed flex justify-end bg-gradient-to-bl from-blue-500 via-pink-500 to-purple-700 rounded-full bottom-5 right-4 p-3"
      variants={ScrollToTopContainerVariants}
      initial="hide"
      animate={controls}
      onClick={scrollToTop}
    >
      <BsRocketFill color="white" size={30} />
    </motion.button>
  );
};

export default ScrollToTop;
