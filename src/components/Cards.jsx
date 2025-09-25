import React from "react";

function Cards() {
  return (
    <div className="w-full min-h-screen bg-zinc-100 flex flex-col lg:flex-row items-center px-4 sm:px-8 md:px-12 lg:px-16 gap-4 sm:gap-5 py-8 overflow-x-hidden">
      {/* Left Card */}
      <div className="cardcontainer h-[15rem] sm:h-[20rem] md:h-[25rem] w-full lg:w-1/2">
        <div className="flex justify-center items-center relative w-full h-full bg-[#004D43] rounded-xl">
          <img
            className="w-20 sm:w-24 md:w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo 1"
          />
          <button className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 px-2 sm:px-3 py-1 border-2 rounded-full text-xs sm:text-sm">
            &copy;2019-2023
          </button>
        </div>
      </div>

      {/* Right Cards */}
      <div className="w-full lg:w-1/2 h-[15rem] sm:h-[20rem] md:h-[25rem] flex flex-col sm:flex-row gap-4 sm:gap-5">
        {/* Card 2 */}
        <div className="flex justify-center items-center relative w-full sm:w-1/2 h-full bg-[#192826] rounded-xl">
          <img
            className="w-20 sm:w-24 md:w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Logo 2"
          />
          <button className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 px-2 sm:px-3 py-1 border-2 rounded-full text-xs sm:text-sm">
            Rating 5.0 on Clutch
          </button>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center items-center relative w-full sm:w-1/2 h-full bg-black/90 rounded-xl">
          <img
            className="w-20 sm:w-24 md:w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Logo 3"
          />
          <button className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 px-2 sm:px-3 py-1 border-2 rounded-full capitalize text-xs sm:text-sm">
            Bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
