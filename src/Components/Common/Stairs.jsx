import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {

  const currentpath  = useLocation().pathname



  const stairParentRef = useRef(null)
  const pageref = useRef(null)

  useGSAP(() => {

    const t1 = gsap.timeline()

    t1.set(stairParentRef.current, {
      display: 'block'
    })

    t1.from('.stair', {
      height: 0,
      stagger: {
        amount: 0.25,
        from: "end"
      }
    })

    t1.to('.stair', {
      y: '100%',
      stagger: {
        amount: 0.25,
        from: "end"
      }
    })

    t1.set(stairParentRef.current, {
      display: 'none'
    })

    t1.set('.stair', {
      y: '0'
    })

    // gsap.from(pageref.current,{
    //   opacity:0,
    //   scale:1.2,

    // })

  },[currentpath])

  return (
    <div>
      
     <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
      <div className='h-screen w-full flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
     </div>
     <div ref={pageref}>
      {props.children}
     </div>
    </div>
  )
}

export default Stairs