import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full h-full py-10 sm:py-16 md:py-20 bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-5xl sm:text-7xl md:text-9xl lg:text-[15vw] xl:text-[20vw] 
                     leading-none uppercase font-semibold pt-5 sm:pt-8 md:pt-10 
                     -mb-3 sm:-mb-5 md:-mb-7 pr-6 sm:pr-8 md:pr-10"
        >
          we are ochi
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="text-5xl sm:text-7xl md:text-9xl lg:text-[15vw] xl:text-[20vw] 
                     leading-none uppercase font-semibold pt-5 sm:pt-8 md:pt-10 
                     -mb-3 sm:-mb-5 md:-mb-7"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
