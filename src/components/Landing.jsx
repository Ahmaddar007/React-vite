import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full min-h-screen bg-zinc-900 pt-1"
    >
      {/* Text Structure */}
      <div className="textstructure mt-16 sm:mt-24 md:mt-32 px-6 sm:px-12 md:px-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div key={index} className="masker overflow-hidden">
              <div className="w-fit flex items-center justify-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6vw" }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                    className="hidden sm:block w-[6vw] h-[5vw] relative rounded-md top-[1vw] bg-red-500 mb-6"
                  ></motion.div>
                )}
                <h1
                  className="
                    uppercase font-light tracking-tighter
                    text-4xl sm:text-6xl md:text-8xl
                    leading-[10vw] sm:leading-[8vw] md:leading-[6.5vw]
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
      <div className="border-t border-zinc-800 mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-10 py-6 px-6 sm:px-12 md:px-20">
        <div className="flex flex-col gap-4">
          {[
            "Presentation and storytelling agency",
            "For innovation teams and global brands",
          ].map((item, index) => (
            <p
              key={index}
              className="text-base sm:text-lg md:text-xl tracking-tight leading-snug font-light text-zinc-300"
            >
              {item}
            </p>
          ))}
        </div>

        <div className="start flex items-center gap-4 sm:gap-5 cursor-pointer">
          <div className="px-4 sm:px-5 py-2 text-sm sm:text-lg border border-zinc-600 capitalize rounded-full hover:bg-zinc-800 transition">
            start the project
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
