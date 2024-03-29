import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import { action, originals } from './constants/urls'

function App() {
  return (
    <div>
       <NavBar />
       <Banner />
       <RowPost url = {originals} title = 'Netflix Originals' />
       <RowPost url = {action} title = 'Action' isSmall />
    </div>
  )
}

export default App