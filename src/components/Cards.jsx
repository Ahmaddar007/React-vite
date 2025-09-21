import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="flex justify-center items-center relative w-full h-full bg-[#004D43] rounded-xl">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full">
            &copy;2019-2023
          </button>
        </div>
      </div>
      <div className="w-1/2 h-[50vh] flex gap-5">
        <div className="flex justify-center items-center relative w-1/2 h-full bg-[#192826] rounded-xl">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full">
            &copy;2019-2023
          </button>
        </div>
        <div className="flex justify-center items-center relative w-1/2 h-full bg-[#192826] rounded-xl">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute left-10 bottom-10 px-3 py-1 border-2 rounded-full">
            &copy;2019-2023
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
