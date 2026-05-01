// import React from 'react'

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
  return (
    <div className='z-40 p-0 flex fixed top-0 w-full items-start justify-between'>

      {/* Logo */}
      <div>
        <img src="/Pics/logo.png" className='w-24 h-24 rounded-full object-cover' />
      </div>

      {/* Hover Box */}
      <div className='group h-16 bg-black relative w-[17vw] overflow-hidden'>

        {/* Green overlay */}
        <div className='absolute top-0 left-0 h-full w-full bg-green-500 scale-y-0 origin-top transition-transform duration-100 group-hover:scale-y-100'></div>

      </div>

    </div>
  )
}

export default Navbar