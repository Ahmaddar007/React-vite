import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full min-h-screen pt-16 sm:pt-20 md:pt-24"
    >
      {/* Text Structure */}
      <div className="textstructure mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker overflow-hidden">
              <div className="w-fit flex items-center justify-start xs:justify-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                    className="w-[12vw] xs:w-[10vw] sm:w-[8vw] md:w-[7vw] lg:w-[6vw] h-[8vw] xs:h-[5vw] sm:h-[5vw] md:h-[5vw] relative rounded-md top-[2vw] xs:top-[1.5vw] sm:top-[1.2vw] md:top-[1vw] bg-red-500 mb-4 xs:mb-5 sm:mb-6"
                  ></motion.div>
                )}
                <h1
                  className="
                    uppercase font-light tracking-tighter
                    text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl
                    leading-[12vw] xs:leading-[11vw] sm:leading-[9vw] md:leading-[7vw] lg:leading-[6.5vw]
                  "
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="border-t border-zinc-800 mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col md:flex-row justify-between items-start gap-4 xs:gap-5 sm:gap-6 md:gap-8 py-4 xs:py-5 sm:py-6 md:py-8 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-2 xs:gap-3 sm:gap-4 md:gap-4 w-full md:w-auto">
          {[
            "Presentation and storytelling agency",
            "For innovation teams and global brands",
          ].map((item, index) => (
            <p
              key={index}
              className="
                text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
                tracking-tight leading-tight xs:leading-snug sm:leading-snug 
                font-light text-black max-w-2xl
              "
            >
              {item}
            </p>
          ))}
        </div>

        <div className="start flex items-center gap-3 xs:gap-4 sm:gap-5 cursor-pointer w-full md:w-auto justify-start md:justify-end mt-2 xs:mt-3 sm:mt-4 md:mt-0">
          <div
            className="
            px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 
            text-xs xs:text-sm sm:text-base md:text-lg 
            border border-zinc-600 capitalize rounded-full 
            hover:bg-teal-800 transition-all duration-300 
            hover:border-zinc-400 active:scale-95
            whitespace-nowrap
          "
          >
            start the project
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="hidden sm:flex items-center justify-center w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border border-zinc-600 hover:bg-teal-800 transition-all duration-300"
          >
            <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          </motion.div>
        </div>
      </div>

      {/* Mobile CTA Button for better UX */}
      <div className="sm:hidden fixed bottom-6 right-6 z-30">
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-14 h-14 bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
        >
          <ArrowRight className="w-6 h-6" />
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
