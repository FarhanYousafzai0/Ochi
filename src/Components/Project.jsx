import React, { useState, useEffect } from 'react';

const Project = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        const { left, top, width, height } = eye.getBoundingClientRect();
        const eyeCenterX = left + width / 2;
        const eyeCenterY = top + height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        setRotate(angle - 180);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='w-full p-20 bg-[#CDEA68]  flex flex-col text-center justify-center gap-20 items-center relative'>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99] gap-10 flex items-center">
        
        {/* First Eye */}
        <div className="h-[200px] w-[200px] rounded-full flex items-center justify-center bg-white">
          <div className="w-2/3 h-2/3 bg-black relative rounded-full eye">
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
          <div className="w-2/3 h-2/3 bg-black relative rounded-full eye">
            <div
              style={{ transform: `rotate(${rotate}deg)` }}
              className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10"
            >
              <div className="w-10 h-10 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Text Content */}
      <div className='text-center'>
        <h1 className='text-[10rem] leading-[3vw] uppercase font-bold tracking-tighter'>Ready</h1>
        <h1 className='text-[10rem] uppercase font-bold tracking-tighter'>to start</h1>
        <h1 className='text-[10rem] leading-[3vw] uppercase font-bold tracking-tighter'>the project?</h1>
      </div>

<div className='flex flex-col gap-5'>

<buton className="px-7 rounded-full py-4 bg-black uppercase  text-white inline-flex gap-3 cursor-pointer items-center">Start the project <div className='w-2 h-2 bg-white rounded-full'></div></buton>

<p className='text-[1.2rem]'>OR</p>

<buton className="px-7 rounded-full py-3 uppercase  border-2 text border-black text-black inline-flex gap-3 cursor-pointer items-center">
    hello@farhan<div className='w-2 h-2 bg-black rounded-full'></div></buton>
</div>
    </div>
  );
}

export default Project;
