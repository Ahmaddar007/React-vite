import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-6 sm:py-8 md:py-12 bg-[#004D43] overflow-x-hidden"
    >
      {/* Marquee for all screens */}
      <div className="border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          className="
            text-xl sm:text-2xl md:text-3xl
            leading-none uppercase font-medium
            py-3 sm:py-4
            pr-4 sm:pr-6
            text-white/80
          "
        >
          • Design • Innovation • Excellence • Creativity • Imagination •
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
