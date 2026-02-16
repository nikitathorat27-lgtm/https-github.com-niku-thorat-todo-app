import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Read from '../pages/read'
import Create from '../pages/create'
import Update from '../pages/update'

function App() {
  

  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/' element={<Read />} />
      <Route path='/add' element={<Create />} />
      <Route path='/update' element={<Update />} />
      <Route path='*' element={<h1>404 not found</h1>} />
    </Routes>
    
    

    </>
    </BrowserRouter>
  )
}

export default App
