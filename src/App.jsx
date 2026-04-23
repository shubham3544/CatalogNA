import React from 'react'
import { Route, Routes , Link} from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'

const App = () => {
  return (
    <div className='text-white'>
      <Link className='text-blue-500 text-small' to='/'>Home</Link>
      <Link className='text-blue-500 text-small' to='/agence'>Profile</Link>
      <Link className='text-blue-500 text-small' to='/projects'>Catalog</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App