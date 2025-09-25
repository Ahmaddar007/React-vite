import React from "react";

function About() {
  return (
    <div className="w-full px-6 py-12 md:px-12 lg:p-20 text-black bg-[#CDEA68]">
      <h1 className="text-[6vw] leading-[7vw] md:text-[4vw] md:leading-[4.5vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 w-full pt-10 border-t border-black/90 mt-10 lg:mt-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-7xl">Our Approach:</h1>
          <button className="flex gap-4 md:gap-6 lg:gap-10 items-center px-6 md:px-8 lg:px-10 py-4 md:py-6 lg:py-7 rounded-full bg-zinc-900 mt-6 md:mt-8 lg:mt-10 text-white text-base md:text-lg">
            Read more
            <div className="w-2 h-2 md:w-3 md:h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 h-56 md:h-72 lg:h-96 bg-teal-700 rounded-2xl md:rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
