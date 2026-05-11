// Fullscrennav.jsx

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { Navbarcontext } from '../../context/Navcontext'
import Navbar from './Navbar'

const Fullscrennav = () => {

  const stairParentRef = useRef(null)
  const fullnavLnkRef = useRef(null)
  const fullscreenref = useRef(null)
  const tl = useRef(null)

  const [navopen, setNavopen] = useContext(Navbarcontext)

  useGSAP(() => {

    gsap.set(fullscreenref.current, {
      display: 'none'
    })

    tl.current = gsap.timeline({
      paused: true
    })

    tl.current.from('.stair', {
      y: '-100%',
      duration: 0.45,
      stagger: {
        each: 0.04,
        from: "end"
      },
      ease: 'power2.out'
    })

    tl.current.from(fullnavLnkRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out'
    }, "-=0.35")

    gsap.from('.link', {
      y: 80,
      opacity: 0,
      stagger: 0.05,
      duration: 0.25,
      ease: 'power2.out',
      delay: 0.1
    })

    gsap.to('.moveX', {
      xPercent: -100,
      duration: 12,
      ease: 'none',
      repeat: -1
    })

  }, [])

  useGSAP(() => {

    if(navopen)
    { 
      document.body.style.overflow = 'hidden'

      gsap.set(fullscreenref.current, {
        display: 'block'
      })

      tl.current.timeScale(1)
      tl.current.play(0)
    } 
    
    else {

      document.body.style.overflow = 'auto'

      tl.current.timeScale(1.8)
      tl.current.reverse()

      tl.current.eventCallback("onReverseComplete", () => {

        gsap.set(fullscreenref.current, {
          display: 'none'
        })

      })

    }

  }, [navopen])

  return (
    <div
      ref={fullscreenref}
      id='fullscreennav'
      className='text-white h-screen w-full fixed top-0 left-0 bg-white overflow-y-auto z-[999] hidden'
    >

      <div ref={stairParentRef} className='h-screen w-full fixed'>
        <div className='h-screen w-full flex'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
      </div>

      <div ref={fullnavLnkRef} className='flex w-full justify-between items-start relative z-10'>

        <div className='pt-'>
          <img src="/Pics/logo.png" className='w-24 h-24 rounded-full object-cover' />
        </div>

        <div
          onClick={()=>{
            setNavopen(false)
          }}
          className='h-32 w-32 relative cursor-pointer'
        >

          <div className='h-42 w-1 -rotate-45 origin-top absolute bg-[#D3FD50]'></div>
          <div className='h-42 w-1 right-0 rotate-45 origin-top absolute bg-[#D3FD50]'></div>

        </div>

      </div>

      <div className='relative py-10 z-10'>

        {/* PROJECT 1 */}
        <div className='link origin-top relative border-y border-white overflow-hidden group'>

          <h1 className='font-[font2] text-[7vw] text-center leading-[0.8] uppercase text-white py-4 group-hover:opacity-0 transition-all duration-300'>
            Projects
          </h1>

          <div className='movelink absolute top-0 left-0 h-full w-full flex items-center bg-[#83ec1b] opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden'>

            <div className='moveX flex items-center whitespace-nowrap shrink-0'>

              <h2 className='font-[font2] text-[7vw] uppercase px-6'>FRESH ARRIVAL</h2>

              <div className='h-28 w-28 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover scale-90' src='/Pics/Pic1.png' alt='' />
              </div>

              <h2 className='font-[font2] text-[7vw] uppercase px-6'>FRESH ARRIVAL</h2>

              <div className='h-28 w-28 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover scale-90' src='/Pics/Pic2.png' alt='' />
              </div>

            </div>

            <div className='moveX flex items-center whitespace-nowrap shrink-0'>

              <h2 className='font-[font2] text-[7vw] uppercase px-6'>FRESH ARRIVAL</h2>

              <div className='h-28 w-28 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover scale-90' src='/Pics/Pic1.png' alt='' />
              </div>

              <h2 className='font-[font2] text-[7vw] uppercase px-6'>FRESH ARRIVAL</h2>

              <div className='h-28 w-28 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover scale-90' src='/Pics/Pic2.png' alt='' />
              </div>

            </div>

          </div>
        </div>

        {/* PROJECT 2 */}
        <div className='link origin-top relative border-b border-white overflow-hidden group'>

          <h1 className='font-[font2] text-[7vw] text-center leading-[0.8] uppercase text-white py-4 group-hover:opacity-0 transition-all duration-300'>
            Branding
          </h1>

          <div className='movelink absolute top-0 left-0 h-full w-full flex items-center bg-[#83ec1b] opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden'>

            <div className='moveX flex items-center whitespace-nowrap shrink-0'>

              <h2 className='font-[font2] text-[7vw] uppercase px-6'>CREATIVE DESIGN</h2>

              <div className='h-28 w-28 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover scale-90' src='/Pics/Pic3.png' alt='' />
              </div>

              <h2 className='font-[font2] text-[7vw] uppercase px-6'>CREATIVE DESIGN</h2>

              <div className='h-28 w-28 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover scale-90' src='/Pics/Pic4.png' alt='' />
              </div>

            </div>

            <div className='moveX flex items-center whitespace-nowrap shrink-0'>

              <h2 className='font-[font2] text-[7vw] uppercase px-6'>CREATIVE DESIGN</h2>

              <div className='h-28 w-28 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover scale-90' src='/Pics/Pic3.png' alt='' />
              </div>

              <h2 className='font-[font2] text-[7vw] uppercase px-6'>CREATIVE DESIGN</h2>

              <div className='h-28 w-28 rounded-full overflow-hidden shrink-0 mx-4'>
                <img className='h-full w-full object-cover scale-90' src='/Pics/Pic4.png' alt='' />
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Fullscrennav