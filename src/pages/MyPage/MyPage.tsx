import React from 'react'
import cn from 'classnames/bind'
import style from './MyPage.module.scss'
import { IMG, SVG } from '@/utils/assets'
const cx = cn.bind(style)

const MyPage = () => {
  return (
    <div className={cx('beer-my-page')}>
      <div className={cx('beer-my-page-title')}>마이페이지</div>
      <div className={cx('beer-user-profile')}>
        <img src={IMG('profile')} alt="profile" />
        <div className={cx('beer-user-info')}>
          <span>닉네임</span>
          <span className={cx('beer-user-rating')}>한줄평 0개</span>
        </div>
      </div>
      <div className={cx('beer-my-review-wrapper')}>
        <div className={cx('beer-my-review-title')}>나의 리뷰</div>
        <div className={cx('beer-my-review-container')}>
          <div className={cx('beer-review-card')}>
            <div className={cx('beer-review-image')} />
            <div className={cx('beer-review-info')}>
              이름
              <div className={cx('beer-review-rating')}>
                <img src={SVG('star')} alt="star" />
                5.0
              </div>
            </div>
          </div>
          <div className={cx('beer-review-card')}>
            <div className={cx('beer-review-image')} />
            <div className={cx('beer-review-info')}>
              이름
              <div className={cx('beer-review-rating')}>
                <img src={SVG('star')} alt="star" />
                5.0
              </div>
            </div>
          </div>
          <div className={cx('beer-review-card')}>
            <div className={cx('beer-review-image')} />
            <div className={cx('beer-review-info')}>
              이름
              <div className={cx('beer-review-rating')}>
                <img src={SVG('star')} alt="star" />
                5.0
              </div>
            </div>
          </div>
          <div className={cx('beer-review-card')}>
            <div className={cx('beer-review-image')} />
            <div className={cx('beer-review-info')}>
              이름
              <div className={cx('beer-review-rating')}>
                <img src={SVG('star')} alt="star" />
                5.0
              </div>
            </div>
          </div>
          <div className={cx('beer-review-card')}>
            <div className={cx('beer-review-image')} />
            <div className={cx('beer-review-info')}>
              이름
              <div className={cx('beer-review-rating')}>
                <img src={SVG('star')} alt="star" />
                5.0
              </div>
            </div>
          </div>
          <div className={cx('beer-review-card')}>
            <div className={cx('beer-review-image')} />
            <div className={cx('beer-review-info')}>
              이름
              <div className={cx('beer-review-rating')}>
                <img src={SVG('star')} alt="star" />
                5.0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPage
