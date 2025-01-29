import React from 'react'

const About = () => {
  return (
    <>
      <div className="w-full py-20 bg-[#CDEA68] rounded-2xl">


        <div className="text-sec px-12 "><h1 className='text-[4vw] text-black leading-[4vw] tracking-tight  '>

Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds</span>, <span className='underline'> sell prod­ucts, ex­plain com­plex ideas,</span>  and <span className="underline">hire great peo­ple.</span>
</h1>
</div>

        <div className="    border-t-1   border-[#525e28] mt-20 ">
       <div className="w-full flex py-5 px-12">


       <div className="w-1/2 ">  
        <h1 className='text-[4vw] font-normal tracking-tighter' >Our approach:</h1>

        <buton className="px-7 rounded-full py-3 bg-black uppercase  text-white inline-flex gap-3 cursor-pointer items-center">Read more  <div className='w-2 h-2 bg-white rounded-full'></div></buton>
        
        </div>
        
         <div className="w-[60] rounded-md  h-[70vh] ">  
        
        <img  className='object-cover h-[100%] w-[100%] rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
       </div>


       

        </div>
      </div>
    </>
  )
}

export default About
