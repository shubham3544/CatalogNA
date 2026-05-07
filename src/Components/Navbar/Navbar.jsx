// import React from 'react'

import { useContext } from "react"
import { Navbarcontext } from "../../context/Navcontext"

// const Navbar = () => {

  
    
//   return (
//     <div className='z-4 p-0 flex fixed top-0 w-full items-start justify-between'>
//         <div>
//         <img src="./Pics/logo.png" className='w-24 h-24 rounded-full object-cover  ' />
//         </div>
//         <div className='h-16 bg-black relative w-[17vw]'>
//           <div className='bg-green-500 absolute top-0 h-0 w-full'>
//           <div className='relative '></div>   
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

const Navbar = () => {

  const [Navopen,setNavopen] = useContext{Navbarcontext}
  return (
    <div className='z-40 p-0 flex fixed top-0 w-full items-start justify-between'>

      {/* Logo */}
      <div>
        <img src= "/Pics/logo.png" className='w-24 h-24 rounded-full object-cover' />
      </div>

      {/* Hover Box */}
      <div onClick={(=>{
        
      })} className='group h-10 bg-black relative w-[17vw] overflow-hidden'>
        <div className="relative h-full px-12 flex justify-center items-end flex-col gap-2">
          <div className="w-18 h-0.5 bg-white"></div>
          <div className="w-10 h-0.5 bg-white"></div>
          
        </div>
      

        {/* Green overlay */}
        <div className='absolute top-0 left-0 h-full w-full bg-green-500 scale-y-0 origin-top transition-transform duration-100 group-hover:scale-y-100'></div>
         
      </div>

    </div>
  )
}

export default Navbar