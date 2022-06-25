import React from 'react'
import cn from 'classnames/bind'
import style from './Card.module.scss'
import star from '@/images/star.svg'
const cx = cn.bind(style)

interface CardProps {
  beer: BeerInfo
}

const Card = ({ beer }: CardProps) => {
  const { name, proof, photoUrl } = beer
  return (
    <div className={cx('beer-card')}>
      <div className={cx('beer-card-container')}>
        <div className={cx('beer-card-front')}>
          <div className={cx('beer-card-front-text')}>
            <b>{name}</b>
            <div className={cx('beer-card-rating')}>
              <img src={star} alt="star" />
              4.8
            </div>
          </div>
        </div>
        <div className={cx('beer-card-right')}>
          <div className={cx('beer-card-right-text')}>
            <b>{name}</b>
            <div className={cx('beer-card-rating')}>
              <img src={star} alt="star" />
              4.8
            </div>
            <div>도수: {proof}%</div>
            <hr />
            <div className={cx('beer-card-oneline-review')}>한줄평 첫번째거</div>
          </div>
          <button className={cx('beer-card-right-button')}>더보기</button>
        </div>
      </div>
      <div className={cx('beer-card-img-wrapper')}>
        <img src={photoUrl} alt="" />
      </div>
    </div>
  )
}

export default Card
