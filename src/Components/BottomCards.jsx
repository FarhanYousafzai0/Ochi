import React from 'react'

const BottomCards = () => {
  return (
    <div>
      

<div className='w-full px-12 py-12 flex items-center gap-4'>

<div className='Card-container w-1/2 h-[70vh] '>

  <div className='Card rounded-md relative w-full bg-[#004D43] h-full flex items-center justify-center '>
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className=''/>
 <button className='rounded-full absolute left-10 bottom-5 px-6 py-1 border-1 border-white text-white flex items-center cursor-pointer'>2019-2020</button>


  </div>
</div>


<div className='Card-contianer flex gap-5  w-1/2 h-[70vh]'>
<div className='Card rounded-md relative w-1/2  bg-[#212121] h-full flex items-center justify-center '>
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className=''/>
 <button className='rounded-full absolute left-10 bottom-5 px-6 py-1 border-1 border-white text-white flex items-center cursor-pointer'>RATING 0.5 ON CLUTCH</button>


  </div>
  <div className='Card rounded-md relative w-1/2  bg-[#212121] h-full flex items-center justify-center '>
    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='  bg-center bg-cover'/>
 <button className='rounded-full absolute left-1 bottom-5 px-2 py-1 border-1 border-white text-white flex items-center cursor-pointer'>BUSNIUSS BOOTCAMP ON ALUMNI</button>


  </div>


</div>

</div>

    </div>
  )
}

export default BottomCards
