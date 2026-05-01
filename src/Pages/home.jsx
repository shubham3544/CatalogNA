import React from 'react'
import Video from '../Components/Home/Video'
import Homeherotext from '../Components/Home/Homeherotext'
import Homebottomtext from '../Components/Home/Homebottomtext'

const home = () => {
  return (
    <div>
       <div className='absolute top-7 left-0 z-50'>
       {/* <img src="./Pics/logo.png" className='w-24 h-24 rounded-full object-cover  ' /> */}
       </div>
       <div className='h-screen w-screen fixed'>
       <Video />
       </div>
       <div className='h-screen w-screen relative flex flex-col justify-between'>
         <Homeherotext />
         <Homebottomtext />
         
       </div>
    </div>
    
    
  )
}

export default home