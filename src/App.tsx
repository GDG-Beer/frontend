import React from 'react'
import NavBar from '@/composition/NavBar/NavBar'
import Footer from '@/composition/Footer/Footer'
import MyPage from './pages/MyPage/MyPage'

function App() {
  return (
    <div id="beer-app-root">
      <div id="beer-app-body">
        <NavBar />
        <MyPage />
        <Footer />
      </div>
    </div>
  )
}

export default App
