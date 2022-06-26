import React, { useEffect, useState } from 'react'
import cn from 'classnames/bind'
import style from './Home.module.scss'
import { SVG } from '@/utils/assets'
import http from '@/utils/http'
import { useNavigate } from 'react-router-dom'
const cx = cn.bind(style)

const Home = () => {
  const [beers, setBeers] = useState<BeerInfo[]>([])
  const navigate = useNavigate()

  const getBeers = async () => {
    const res = await http.get('/beers/all')
    setBeers(res.data.data)
  }

  const onBeerClickHandler = (idx: number) => {
    navigate('/detail', {
      state: { beer: beers[idx] },
    })
  }

  useEffect(() => {
    getBeers()
  }, [])

  return (
    <div className={cx('beer-home')}>
      <div className={cx('beer-home-title')}>제목</div>
      <div className={cx('beer-home-card-container')}>
        {beers.map((beer, idx) => (
          <div className={cx('beer-home-card')} key={beer.id} onClick={() => onBeerClickHandler(idx)}>
            <img src={beer.photoUrl} className={cx('beer-home-card-image')} alt={beer.name} />
            <div className={cx('beer-home-card-info')}>
              <span className={cx('beer-home-card-name')}>{beer.name}</span>
              <div className={cx('beer-home-card-rating')}>
                <img src={SVG('star')} alt="star" />
                5.0
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
