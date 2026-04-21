// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// import React, { useRef } from 'react'

// const agence = () => {

//    const imageDivRef = useRef(null)
//    const imageRef = useRef(null)

//    const imageArray =[
//     "./Pics/Pic1.png",
//     "./Pics/Pic2.png",
//     "./Pics/Pic3.png",
//     "./Pics/Pic4.png",
//     "./Pics/Pic5.png",
//     "./Pics/Pic6.png",
//     "./Pics/Pic7.png",
//     "./Pics/Pic8.png",
//     "./Pics/Pic9.png",
//     "./Pics/Pic10.png",
//     "./Pics/Pic11.png",
//     "./Pics/Pic12.png",
//     "./Pics/Pic13.png",
//     "./Pics/Pic14.png",
    
//    ]
//    gsap.registerPlugin(ScrollTrigger)

//    useGSAP(function(){
//     gsap.to(imageDivRef.current,{
//       scrollTrigger:{
//         trigger:imageDivRef.current,
//         markers:true,
//         start:'top 22% ',
//         end:'top -100%',
//         scrub:true,
//         pin:true,
//         onUpdate:(elem)=>{
//           const imageIndex = Math.floor(elem.progress*imageArray.length)
//           imageRef.current.src = imageArray[imageIndex]
           
//         }
        
//       }
//     })
//    })
//   return (
//     <div>
//     <div className='section1'>
//      <div ref={imageDivRef} className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-[30px]  top-40 left-[30vw]'>
//         <img ref={imageRef}  className='h-full object-cover  w-full '  src='./Pics/Pic1.png'></img>
//      </div>
//      <div className='relative font-[font2]'>
//       <div className=' mt-[45vh]' >
//         <h1 className='text-[17vw]  text-center uppercase leading-[17vw]'> NAMDHARI FASHIONS <br/></h1>
//       </div>
//       <div className='pl-[40%] mt-20'>
//         <p className='text-5xl '> &nbsp;&nbsp;&nbsp;&nbsp;Namdhari Fashions stands as a symbol of heritage, elegance, and refined artistry. Specializing in women's traditional wear, we blend age-old craftsmanship with modern aesthetics to create ensembles that exude grace and grandeur. Each design is thoughtfully crafted to celebrate the &richness of tradition while embracing the spirit of contemporary luxury.</p>
//       </div>
//      </div>
//     </div>
//     <div className="section2 h-screen">

//     </div>
//     </div>
//   )
// }

// export default agence

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "/Pics/Pic1.png",
    "/Pics/Pic2.png",
    "/Pics/Pic3.png",
    "/Pics/Pic4.png",
    "/Pics/Pic5.png",
    "/Pics/Pic6.png",
    "/Pics/Pic7.png",
    "/Pics/Pic8.png",
    "/Pics/Pic9.png",
    "/Pics/Pic10.png",
    "/Pics/Pic11.png",
    "/Pics/Pic12.png",
    "/Pics/Pic13.png",
    "/Pics/Pic14.png",
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 22%',
        end: 'top -100%',
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * imageArray.length)

          if (imageRef.current) {
            imageRef.current.src =
              imageArray[Math.min(index, imageArray.length - 1)]
          }
        }
      }
    })
  })

  return (
    <div>
      <div className='section1'>

        {/* Image */}
        <div
          ref={imageDivRef}
          className='absolute overflow-hidden h-[20vw] w-[15vw] rounded-[30px] top-40 left-[30vw]'
        >
          <img
            ref={imageRef}
            className='h-full w-full object-cover'
            src="/Pics/Pic1.png"
            alt=""
          />
        </div>

        {/* Text */}
        <div className='relative font-[font2]'>

          <div className='mt-[45vh]'>
            <h1 className='text-[17vw] text-center uppercase leading-[17vw]'>
              NAMDHARI FASHIONS
            </h1>
          </div>

          <div className='pl-[40%] mt-20'>
            <p className='text-5xl'>
              Namdhari Fashions stands as a symbol of heritage, elegance, and refined artistry.
              Specializing in women's traditional wear, we blend age-old craftsmanship with modern
              aesthetics to create ensembles that exude grace and grandeur. Each design is thoughtfully
              crafted to celebrate the richness of tradition while embracing the spirit of contemporary luxury.
            </p>
          </div>

        </div>
      </div>

      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence