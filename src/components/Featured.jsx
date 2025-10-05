import { motion } from "framer-motion";
import React from "react";

function Featured() {
  // Variants for each letter
  const letterVariants = {
    initial: { y: "100%", opacity: 0 },
    hover: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.1, // stagger by index
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-full py-10">
      {/* Title */}
      <div className="w-full px-5 md:px-10 lg:px-20 border-b border-zinc-700 pb-10 md:pb-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight">
          Featured Projects
        </h1>
      </div>

      <div className="px-5 md:px-10 lg:px-20">
        <div className="cards w-full flex flex-col lg:flex-row gap-6 lg:gap-10 mt-8">
          {/* Card 1 */}
          <motion.div
            whileHover="hover"
            initial="initial"
            className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] relative group"
          >
            <h1
              className="absolute flex overflow-hidden z-[9] text-teal-950 
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight 
              -translate-x-1/2 -translate-y-1/2 top-1/2 left-full"
            >
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg"
                alt="FYDE Project"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover="hover"
            initial="initial"
            className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] relative group"
          >
            <h1
              className="absolute flex overflow-hidden z-[9] text-teal-950 
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight 
              translate-x-1/2 -translate-y-1/2 top-1/2 right-full"
            >
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>

            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
                alt="VISE Project"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
