import React from 'react'
import cn from 'classnames/bind'
import style from './Card.module.scss'
import asahi from '@/images/asahi.png'
import star from '@/images/star.svg'
const cx = cn.bind(style)

const Card = () => {
  return (
    <div className={cx('beer-card')}>
      <div className={cx('beer-card-container')}>
        <div className={cx('beer-card-front')}>
          <div className={cx('beer-card-front-text')}>
            <b>아사히</b>
            <div className={cx('beer-card-star')}>
              <img src={star} alt="" />
              4.8
            </div>
          </div>
        </div>
        <div className={cx('beer-card-right')}>
          <div className={cx('beer-card-right-text')}>
            <h1>아사히</h1>
            <div className={cx('beer-card-star')}>
              <img src={star} alt="" />
              4.8
            </div>
            <div>5.5%</div>
            <div>일본맥주일본맥주일본맥주일본맥주일본맥주</div>
          </div>
          <button className={cx('beer-card-right-button')}>더보기</button>
        </div>
      </div>
      <div className={cx('beer-card-img-wrapper')}>
        <img src={asahi} alt="" />
      </div>
    </div>
  )
}

export default Card
