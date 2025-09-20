import React from "react";

function About() {
  return (
    <div className="w-full p-20 text-black bg-[#CDEA68] ">
      <h1 className="text-[4vw] leading-[4.5vw] tracking-tight">
        We craft category-defining presentations, brand identities, and digital
        experiences that drive funding, sales, and market leadership.
      </h1>
      <div className="flex gap-5 w-full pt-10 border-t-[1px] border-black/90 mt-20">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach:</h1>
          <button className="flex gap-10 items-center px-10 py-7 rounded-full bg-zinc-900 mt-10 text-white">
            Read more
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-96 bg-teal-700 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default About;
