import React from 'react'
import cn from 'classnames/bind'
import style from './Home.module.scss'
import { SVG } from '@/utils/assets'
const cx = cn.bind(style)

const Home = () => {
  const temp = Array(12).fill(true)
  return (
    <div className={cx('beer-home')}>
      <div className={cx('beer-home-title')}>제목</div>
      <div className={cx('beer-home-card-container')}>
        {temp.map((e) => (
          <div className={cx('beer-home-card')}>
            <div className={cx('beer-home-card-image')}>이미지</div>
            <div className={cx('beer-home-card-info')}>
              <span className={cx('beer-home-card-name')}>이름</span>
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
