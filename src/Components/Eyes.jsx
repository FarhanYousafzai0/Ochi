import React, { useEffect, useState } from 'react';

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Corrected angle calculation
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-screen bg-center bg-cover bg-[url(https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] gap-10 flex items-center">
          
          {/* First Eye */}
          <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center bg-white">
            <div className="w-2/3 h-2/3 bg-black relative rounded-full">
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10"
              >
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Second Eye */}
          <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center bg-white">
            <div className="w-2/3 h-2/3 bg-black relative rounded-full">
              <div
                style={{ transform: `rotate(${rotate}deg)` }}
                className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10"
              >
                <div className="w-10 h-10 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Eyes;
