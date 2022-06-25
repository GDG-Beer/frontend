import React from 'react'
import cn from 'classnames/bind'
import { Link } from 'react-router-dom'
import style from './BeerDetailPage.module.scss'
import { IMG, SVG } from '@/utils/assets'
const cx = cn.bind(style)

const BeerDetailPage = () => {
  return (
    <div className={cx('beer-detail')}>
      <div className={cx('beer-info')}>
        <div className={cx('beer-image')}>
          <img src={IMG('asahi')} alt="beer" />
        </div>
        <div className={cx('beer-info-detail')}>
          이름
          <div className={cx('beer-info-price')}>
            <span>가격</span>
            <span>도수</span>
          </div>
          <div className={cx('beer-review-rating')}>
            <img src={SVG('star')} alt="star" />
            5.0
          </div>
        </div>
      </div>
      <div className={cx('beer-info-btn-section')}>
        <Link to={'/new-comment'}>
          <button>한줄평 작성</button>
        </Link>
        <Link to={'/new-image'}>
          <button>사진 업로드</button>
        </Link>
      </div>
      <div className={cx('beer-info-comment-section')}>
        <div className={cx('beer-info-comment-title')}>한줄평</div>
        <div className={cx('beer-info-comment')}>
          <img src={IMG('profile')} alt="profile" />
          한줄평 1
        </div>
        <div className={cx('beer-info-comment')}>
          <img src={IMG('profile')} alt="profile" />
          한줄평 2
        </div>
        <div className={cx('beer-info-comment')}>
          <img src={IMG('profile')} alt="profile" />
          한줄평 3
        </div>
      </div>
      <div className={cx('beer-info-images-section')}>
        <div className={cx('beer-info-image-title')}>사진</div>
        <div className={cx('beer-info-images')}>
          <img src={IMG('sampleFood')} alt="sample-food" />
          <img src={IMG('sampleFood')} alt="sample-food" />
          <img src={IMG('sampleFood')} alt="sample-food" />
        </div>
      </div>
    </div>
  )
}

export default BeerDetailPage
