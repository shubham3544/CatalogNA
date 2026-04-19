import React from 'react'
import Video from '../Components/Home/Video'
import Homeherotext from '../Components/Home/Homeherotext'
import Homebottomtext from '../Components/Home/Homebottomtext'

const home = () => {
  return (
    <div>
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