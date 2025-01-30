import React from 'react'
import { motion } from "motion/react"
const Marque = () => {
  return (
    <>
      <div className="w-full py-20  bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">

<div className="text flex  whitespace-nowrap overflow-hidden border-t-1 border-b-1 border-zinc-300 ">
<motion.h1
initial={{x:"0"}}
animate={{x:"-100%"}}
transition={{repeat:Infinity, ease:"linear", duration:4}}
      className="text-[20rem] tracking-tighter uppercase font-bold -mt-15 leading-none text-white pr-12"
     
    >
      we are ochi
    </motion.h1>
    <motion.h1
initial={{x:"0"}}
animate={{x:"-100%"}}
transition={{repeat:Infinity, ease:"linear", duration:4}}
      className="text-[20rem] tracking-tighter uppercase font-bold -mt-15 leading-none text-white pr-12"
     
    >
      we are ochi
    </motion.h1>

</div>



      </div>
    </>
  )
}

export default Marque
