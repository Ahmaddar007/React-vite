import React, { useEffect, useState } from "react";

function Eyes() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // ✅ Correct atan2 usage
      let radian = Math.atan2(deltaY, deltaX);
      setAngle(radian);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[1, 2].map((eye, index) => (
            <div
              key={index}
              className="flex justify-center items-center rounded-full w-[15vw] h-[15vw] bg-zinc-100"
            >
              <div className="relative flex justify-center items-center w-2/3 h-2/3 bg-black rounded-full overflow-hidden">
                <div
                  style={{
                    transform: `translate(${Math.cos(angle) * 25}px, ${
                      Math.sin(angle) * 25
                    }px)`,
                  }}
                  className="absolute w-10 h-10 rounded-full bg-zinc-100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
