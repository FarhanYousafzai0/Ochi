import React, { useState } from 'react';

const Cards = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div>
      <div className='w-full py-5'>
        <h1 className='px-12 text-[4vw] tracking-tighter'>Featured projects</h1>
        <div className='w-full mt-10 border-t border-zinc-300'></div>

        <div className='px-12 py-10'>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className='Card-container relative w-full h-[75vh]'
            >
              {"FYSE".split("").map((item, index) => (
                <h1 
                  key={index}
                  className='absolute top-1/2 left-1/2 uppercase font-semibold text-[6vw] text-[#CDEA68] -translate-x-[50%] -translate-y-[50%]'
                >
                  {/* {item} */}
                </h1>
              ))}
              <div className='Card w-full h-full overflow-hidden rounded-lg'>
                <img
                  src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                  alt=""
                  className='bg-cover bg-center h-[100%] w-[100%] cursor-pointer'
                />
              </div>
            </div>

            <div
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className='Card-container relative w-full h-[75vh]'
            >
              <h1 className='absolute top-1/2 right-1/2 uppercase font-semibold text-[6vw] text-[#CDEA68] translate-x-[50%] -translate-y-[50%]'>
                {/* FYSE */}
              </h1>
              <div className='Card w-full h-full overflow-hidden rounded-lg'>
                <img
                  src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                  alt=""
                  className='bg-cover bg-center h-[100%] w-[100%] cursor-pointer'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center w-full'>
        <button className="px-7 rounded-full py-3 bg-black text-white inline-flex gap-3 cursor-pointer items-center uppercase mb-10">
          View all case studies
          <div className='w-2 h-2 bg-white rounded-full'></div>
        </button>
      </div>
    </div>
  );
};

export default Cards;
