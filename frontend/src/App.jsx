import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Routes>
     <Route path='/' element={<Home/>} />



     
      </Routes>


    </div>
  )
}
