import React, { useEffect, useState } from "react";

function Eyes() {
  const [angle, setAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      if (isMobile) return;

      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let radian = Math.atan2(deltaY, deltaX);
      setAngle(radian);
    };

    const handleTouchMove = (e) => {
      if (!isMobile) return;

      const touch = e.touches[0];
      let touchX = touch.clientX;
      let touchY = touch.clientY;

      let deltaX = touchX - window.innerWidth / 2;
      let deltaY = touchY - window.innerHeight / 2;

      let radian = Math.atan2(deltaY, deltaX);
      setAngle(radian);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  // Simplified pupil movement
  const getPupilMovement = () => (isMobile ? 10 : 15);

  return (
    <div className="eyes w-full h-screen overflow-x-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Eyes Container */}
        <div className="absolute flex flex-row gap-4 sm:gap-6 md:gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[90%] justify-center items-center px-4">
          {[1, 2].map((eye, index) => (
            <div
              key={index}
              className="
                flex justify-center items-center rounded-full
                bg-zinc-100/95 backdrop-blur-sm
                border-2 sm:border-4 border-white/30
                shadow-2xl hover:shadow-3xl
                transition-all duration-300
                w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] min-w-[80px] min-h-[80px] max-w-[120px] max-h-[120px]
              "
            >
              <div className="relative flex justify-center items-center w-2/3 h-2/3 bg-black rounded-full overflow-hidden border border-gray-800">
                {/* Pupil */}
                <div
                  style={{
                    transform: `translate(${
                      Math.cos(angle) * getPupilMovement()
                    }px, ${Math.sin(angle) * getPupilMovement()}px)`,
                    transition: isMobile
                      ? "transform 0.1s ease-out"
                      : "transform 0.15s ease-out",
                  }}
                  className="
                    absolute rounded-full bg-zinc-100
                    w-5 h-5 sm:w-6 sm:h-6 min-w-[20px] min-h-[20px]
                    shadow-inner
                  "
                >
                  <div className="absolute top-1 left-1 w-1 h-1 sm:w-2 sm:h-2 bg-white/80 rounded-full"></div>
                </div>

                {/* Eye Reflection */}
                <div className="absolute top-2 left-3 w-2 h-2 sm:w-3 sm:h-3 bg-white/40 rounded-full blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
          <p className="text-white/80 text-xs sm:text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            {isMobile
              ? "👆 Touch and move to control eyes"
              : "👀 Move cursor to control eyes"}
          </p>
        </div>

        {/* Loading Fallback */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-base opacity-0">Loading...</div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
