import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { Navbarcontext } from '../../context/Navcontext'
import Navbar from './Navbar'

const Fullscrennav = () => {

  const stairParentRef = useRef(null)
  const fullnavLnkRef = useRef(null)
  const fullscreenref = useRef(null)

  const [Navopen, setNavopen] = useContext(Navbarcontext)

  useGSAP(() => {

    const t1 = gsap.timeline()
   
    t1.from('.stair', {

      stagger: {
        amount: 0.25,
        from: "end"
      }
    })

    t1.from(fullnavLnkRef.current, {
      opacity: 0,
    })

    t1.from('.link', {
      rotateX: 90
    })

    t1.pause()

    if(Navopen)
    { fullscreenref.current.style.display = 'block',
      t1.play()
    } else{
      fullscreenref.current.style.display = 'none',
      t1.reverse()
    }

  },[Navopen])

  return (
    <div ref={fullscreenref} id='fullscreennav' className=  'hidden   text-white  h-screen w-full  absolute bg-white overflow-hidden z-50'>
      <div ref={stairParentRef}   className='h-screen-full w-full fixed'>
         <div className='h-screen w-full flex'>
           <div className='stair h-full w-1/5 bg-red-900'></div>
           <div className='stair h-full w-1/5 bg-red-900'></div>
           <div className='stair h-full w-1/5 bg-red-900'></div>
           <div className='stair h-full w-1/5 bg-red-900'></div>
           <div className='stair h-full w-1/5 bg-red-900'></div>
         </div>
      </div>
      <div  ref={fullnavLnkRef}  className='flex w-full justify-between items-start relative'>
          <div className='pt-'>
           <img src= "/Pics/logo.png" className='w-24 h-24 rounded-full object-cover' />
           </div>
           <div className='h-32 w-32 relative cursor-pointer'>
             <div className='h-42 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
             <div className='h-42 w-1  right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>
             <div></div>
           </div>
      </div>
      <div  ref={fullnavLnkRef}    className=' relative py-20'>

        {/* PROJECT 1 */}
        <div className='link origin-top relative border-y border-white overflow-hidden group'>
          <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] uppercase text-white py-5 group-hover:opacity-0 transition-all duration-300'>Projects</h1>

          <div className='movelink absolute top-0 left-0 flex bg-[#83ec1b] opacity-0 group-hover:opacity-100 transition-all duration-500'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>FRESH ARRIVAL</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic1.png' alt='' />
              </div>

              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>FRESH ARRIVAL</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic2.png' alt='' />
              </div>
            </div>

            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>FRESH ARRIVAL</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic1.png' alt='' />
              </div>

              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>FRESH ARRIVAL</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic2.png' alt='' />
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className='link origin-top  relative border-b border-white overflow-hidden group'>
          <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] uppercase text-white py-5 group-hover:opacity-0 transition-all duration-300'>Branding</h1>

          <div className='movelink absolute top-0 left-0 flex bg-[#83ec1b] opacity-0 group-hover:opacity-100 transition-all duration-500'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>CREATIVE DESIGN</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic3.png' alt='' />
              </div>

              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>CREATIVE DESIGN</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic4.png' alt='' />
              </div>
            </div>

            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>CREATIVE DESIGN</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic3.png' alt='' />
              </div>

              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>CREATIVE DESIGN</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic4.png' alt='' />
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className='link origin-top  relative border-b border-white overflow-hidden group'>
          <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] uppercase text-white py-5 group-hover:opacity-0 transition-all duration-300'>Animation</h1>

          <div className='movelink absolute top-0 left-0 flex bg-[#83ec1b] opacity-0 group-hover:opacity-100 transition-all duration-500'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>DIGITAL ART</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic1.png' alt='' />
              </div>

              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>DIGITAL ART</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic2.png' alt='' />
              </div>
            </div>

            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>DIGITAL ART</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic1.png' alt='' />
              </div>

              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>DIGITAL ART</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic2.png' alt='' />
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className='link origin-top  relative border-b border-white overflow-hidden group'>
          <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] uppercase text-white py-5 group-hover:opacity-0 transition-all duration-300'>Portfolio</h1>

          <div className='movelink absolute top-0 left-0 flex bg-[#83ec1b] opacity-0 group-hover:opacity-100 transition-all duration-500'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>UI UX DESIGN</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic3.png' alt='' />
              </div>

              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>UI UX DESIGN</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic4.png' alt='' />
              </div>
            </div>

            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>UI UX DESIGN</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic3.png' alt='' />
              </div>

              <h2 className='whitespace-nowrap font-[font2] text-[8vw] uppercase'>UI UX DESIGN</h2>

              <div className='h-36 w-36 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover object-[center_15%] scale-90' src='/Pics/Pic4.png' alt='' />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Fullscrennav