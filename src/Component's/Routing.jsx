import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MenuCard from '../Pages/MenuCard'

function Routing() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MenuCard/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing
