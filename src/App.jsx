import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Question from './pages/Question'
import EndPage from './pages/EndPage'

const App = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
 
        <Routes>
          <Route path='/question/:id' element={<Question />} />
          <Route path='/end' element={<EndPage />} />
          <Route path='*' element={<Navigate to='/question/1' />} /> 
        </Routes>

    </div>
  )
}

export default App