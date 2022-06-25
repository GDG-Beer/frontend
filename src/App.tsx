import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NavBar from '@/components/composition/NavBar/NavBar'
import Footer from '@/components/composition/Footer/Footer'
import MyPage from '@/pages/MyPage/MyPage'
import Home from '@/pages/Home/Home'
import InfoPage from '@/pages/InfoPage/InfoPage'
import NewImage from '@/pages/NewImage/NewImage'
import BeerDetailPage from './pages/BeerDetailPage/BeerDetailPage'

function App() {
  const { pathname } = useLocation()
  let text = undefined

  switch (pathname) {
    case '/new-image':
      text = '사진'
      break
    case '/detail':
      text = '상세 페이지'
      break
    default:
      break
  }

  return (
    <div id="beer-app-root">
      <div id="beer-app-body">
        <NavBar text={text} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/new-image" element={<NewImage />} />
          <Route path="/detail" element={<BeerDetailPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
