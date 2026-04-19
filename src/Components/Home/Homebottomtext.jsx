import React from 'react'
import { Link } from 'react-router-dom'

const homebottomtext = () => {
  return (
    <div className='font-font[2] flex items-center justify-center gap-2 text-#2c1b12'>
      <Link className='text-[3vw]  border-4 hover:border-green-700 hover:text-green-500 border-amber-200 rounded-full px-5 pt-3 uppercase' to='/projects'>Catalog</Link>
      <Link className='text-[3vw]  border-4 hover:border-green-700 hover:text-green-500 border-amber-200 rounded-full px-5 pt-3 uppercase' to='/agence'>Profiles</Link>

    </div>
  )
}

export default homebottomtext