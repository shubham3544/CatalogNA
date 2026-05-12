import React from 'react'
import { Route, Routes , Link} from 'react-router-dom'
import Home from './Pages/Home'
import Agence from './Pages/Agence'
import Projects from './Pages/Projects'
import Navbar from './Components/Navbar/Navbar'
import Fullscrennav from './Components/Navbar/Fullscrennav'


const App = () => {

  
  return (
    <div className='text-black bg-[#F5F1EA]'>
      
      
      

      <Navbar />
      <Fullscrennav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App