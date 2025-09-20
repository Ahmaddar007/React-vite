import { motion } from "framer-motion";
import { ArrowRight } from "lucide";
import React from "react";

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-32 px-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6vw" }}
                    transition={{
                      duration: 1, // how fast it grows
                      delay: 0.5, // wait before starting
                      ease: "easeInOut", // smooth easing
                    }}
                    className="w-[6vw] h-[5vw] relative rounded-md top-[1vw] bg-red-500"
                  ></motion.div>
                )}
                <h1 className="uppercase leading-[6.5vw] tracking-tighter font-light text-8xl">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "Presentation and storytelling agency",
          "For innovation teams and global brands",
        ].map((item, index) => (
          <p className="text-lg tracking-tight leading-none font-light">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5 cursor-pointer">
          <div className="px-5 py-2 text-lg border-[1px] border-zinc-600 capitalize rounded-full">
            start the project
          </div>
          <div className="flex justify-center item-center w-10 h-10 rounded-full border-[1px] border-zinc-600">
            <span className="rotate-[-45deg]">
              <p className="mt-1">Go</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
