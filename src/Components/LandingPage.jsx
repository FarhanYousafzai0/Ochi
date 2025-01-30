import LocomotiveScroll from 'locomotive-scroll';
import { easeInOut } from 'motion';
import { motion } from 'motion/react';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';

const LandingPage = () => (

  
    <>
     <div className="w-full h-screen pt-1">


        <div className="textStructure px-12 mt-30">
  {["we create", "eye opening", "presentation"].map((item, index) => {
    return (
      <div key={index} className="masker mb-4">
        <div className="w-full flex items-center justify-start relative">
          {/* Conditional Green Box */}
          {index === 1 && (
            <motion.img
            initial={{width:0}}
            animate={{width:"8vw"}}
            transition={{ease:[0.76, 0, 0.24, 1],duration:1}}
            src='https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg' className="mr-5 rounded-md w-[8vw] h-[5.7vw] bg-green-400 relative top-1 transform " />
          )}

          
          <h1 className={`uppercase font-founder leading-[.75] flex items-center tracking-tighter font-bold text-8xl`}>
            {item}
          </h1>
        </div>
      </div>
    );
  })}
</div>


            <div className="flex  items-center justify-between mt-20 px-12 py-3 border-t-1 border-zinc-500">

                {["For public and private companies", "From the first pitch to IPO"].map((item,index) =>{
                    return(
                        <p key={index} className='capitalize'>{item}</p>
                    )
                })}

<div className="start flex items-center gap-1">
  {/* Start the Project Text */}
  <p className='uppercase px-3 py-[0.2rem] rounded-full border-[1.9px] cursor-pointer'>
    start the project
  </p>

  {/* Arrow Button */}
  <div className="flex items-center justify-center border-1 w-7 h-7 cursor-pointer rounded-full">
    <span className='rotate-45'>
      <FaArrowUpLong />
    </span>
  </div>
</div>



            </div>
        </div>


    </>
)

export default LandingPage
