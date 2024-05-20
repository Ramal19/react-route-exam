import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Add from './Pages/Add'
import Home from './Pages/Home'
import Details from './Pages/Details'
import Catalogs from './Pages/Catalogs'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Add/>} path='/add'/>
            <Route element={<Details/>} path='/details:id'/>
            <Route element={<Catalogs/>} path='/catalogs'/>
        </Routes>
    </BrowserRouter>
  )
}

export default App