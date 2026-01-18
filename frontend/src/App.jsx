import { useState } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import Login from './views/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
