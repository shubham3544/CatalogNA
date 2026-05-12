// import React from 'react'

// const ProjectCard = () => {
//   return (
//     <div className='w-full   h-110 mb-4 flex gap-2  '>
//              <div className='w-1/2 group transition-all relative h-full hover:rounded-[50px] overflow-hidden '>
//                 <img className='h-full w-full object-cover object-[center_15%]'  src='/Pics/Pic6.png'></img>
//                 <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full  bg-black/10'>
//                   <h2 className='uppercase text-6xl font-[font1] border-4 rounded-full text-white border-white p-2'> MEHROZA</h2>
//                 </div>
//              </div>
//              <div className='w-1/2 group transition-all relative h-full hover:rounded-[50px] overflow-hidden '>
//                 <img className='h-full w-full object-cover object-[center_15%]'  src='/Pics/Pic6.png'></img>
//                 <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full  bg-black/10'>
//                   <h2 className='uppercase text-6xl font-[font1] border-4 rounded-full text-white border-white p-2'> MEHROZA</h2>
//                 </div>
//              </div>
             
//            </div>
//   )
// }

// export default ProjectCard
// ProjectCard.jsx

import React from 'react'

const ProjectCard = ({ item1, item2 }) => {
  return (
    <div className='w-full h-[700px] mb-4 flex gap-2'>

      {/* LEFT CARD */}
      <div className='w-1/2 group transition-all relative h-full hover:rounded-[50px] overflow-hidden'>

        <img
          className='h-full w-full object-cover object-top'
          src={item1.image}
        />

        <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>

          <h2 className='uppercase text-6xl font-[font1] border-4 rounded-full text-white border-white p-2'>
            {item1.title}
          </h2>

        </div>
      </div>

      {/* RIGHT CARD */}
      <div className='w-1/2 group transition-all relative h-full hover:rounded-[50px] overflow-hidden'>

        <img
          className='h-full w-full object-cover object-top'
          src={item2.image}
        />

        <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10'>

          <h2 className='uppercase text-6xl font-[font1] border-4 rounded-full text-white border-white p-2'>
            {item2.title}
          </h2>

        </div>
      </div>

    </div>
  )
}

export default ProjectCard