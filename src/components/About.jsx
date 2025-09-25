import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function About() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-12 bg-[#CDEA68] text-black overflow-x-hidden">
      {/* Main Heading */}
      <div className="max-w-full mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            leading-tight tracking-tight font-medium
            px-2 sm:px-0
          "
        >
          We craft category-defining presentations, brand identities, and
          digital experiences that drive funding, sales, and market leadership.
        </motion.h1>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 border-t border-black/90 mt-6 sm:mt-8 md:mt-10 pt-6 sm:pt-8 md:pt-10"
        >
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                font-semibold leading-tight
              "
            >
              Our Approach:
            </motion.h2>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#1a1a1a" }}
              whileTap={{ scale: 0.98 }}
              className="
                flex items-center gap-2 sm:gap-3 md:gap-4
                px-4 sm:px-5 md:px-6 py-2 sm:py-3
                rounded-full bg-zinc-900
                mt-3 sm:mt-4 md:mt-5
                text-white text-xs sm:text-sm md:text-base
                hover:bg-zinc-800 transition-all duration-300
                group w-fit font-medium
                shadow-lg hover:shadow-xl
              "
            >
              Read more
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center"
              >
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.div>
            </motion.button>

            {/* Additional Info for Larger Screens */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="hidden lg:block mt-6 space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <p className="text-sm md:text-base text-black/80">
                  Strategic Brand Development
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <p className="text-sm md:text-base text-black/80">
                  Data-Driven Presentations
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <p className="text-sm md:text-base text-black/80">
                  Digital Experience Design
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[16rem]
                bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800
                rounded-lg sm:rounded-xl
                overflow-hidden relative
                shadow-lg hover:shadow-2xl transition-all duration-500
                group
              "
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Content */}
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center relative z-10">
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white text-base sm:text-lg md:text-xl font-light mb-2"
                >
                  Visual Storytelling
                </motion.span>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-teal-100 text-xs sm:text-sm hidden sm:block"
                >
                  Innovative designs that captivate and convert
                </motion.p>

                {/* Play Button for Interactive Feel */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="absolute bottom-4 right-4 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30"
                >
                  <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats for Mobile */}
            <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4 mt-4">
              <div className="bg-black/5 rounded-lg p-3 text-center">
                <div className="text-base sm:text-lg font-bold text-black">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-black/70">Projects</div>
              </div>
              <div className="bg-black/5 rounded-lg p-3 text-center">
                <div className="text-base sm:text-lg font-bold text-black">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-black/70">Success</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:hidden mt-8 text-center"
        >
          <button
            className="
            px-6 py-3
            border-2 border-black rounded-full
            text-sm sm:text-base font-medium
            hover:bg-black hover:text-white
            transition-all duration-300
            w-full max-w-[90%]
          "
          >
            View Case Studies
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
