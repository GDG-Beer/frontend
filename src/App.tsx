import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '@/composition/NavBar/NavBar'
import Footer from '@/composition/Footer/Footer'
import MyPage from '@/pages/MyPage/MyPage'
import Home from '@/pages/Home/Home'
import InfoPage from '@/pages/InfoPage/InfoPage'

function App() {
  return (
    <div id="beer-app-root">
      <div id="beer-app-body">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
