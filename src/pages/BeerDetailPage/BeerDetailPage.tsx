import React, { useEffect, useState } from 'react'
import cn from 'classnames/bind'
import { Link, useLocation } from 'react-router-dom'
import style from './BeerDetailPage.module.scss'
import { IMG, SVG } from '@/utils/assets'
import http from '@/utils/http'
const cx = cn.bind(style)

const BeerDetailPage = () => {
  const location = useLocation()
  const [beerDetail, setBeerDetail] = useState<BeerDetailInfo>()
  const [snackList, setSnackList] = useState([])
  const beer = location.state.beer

  const getBeerDetail = async (id: number) => {
    const res = await http.get(`/beers/${id}`)
    setBeerDetail(res.data.data)
  }

  const getSnack = async (id: number) => {
    const res = await http.get(`/beers/${id}/snacks?offet=0&limit=9`)
    setSnackList(res.data.data)
  }

  useEffect(() => {
    getBeerDetail(beer.id)
    getSnack(beer.id)
  }, [beer.id])

  return (
    <div className={cx('beer-detail')}>
      <div className={cx('beer-info')}>
        <div className={cx('beer-image')}>
          <img src={beer.photoUrl} alt={beer.name} />
        </div>
        <div className={cx('beer-info-detail')}>
          {beer.name}
          <div className={cx('beer-info-price')}>
            <span>{beer.price}원</span>
            <span>{beer.proof} 도</span>
          </div>
          <div className={cx('beer-review-rating')}>
            <img src={SVG('star')} alt="star" />
            {beerDetail?.score}
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
        {beerDetail?.review.map((comment, idx) => {
          return (
            <div className={cx('beer-info-comment')} key={idx}>
              {comment}
            </div>
          )
        })}
      </div>
      <div className={cx('beer-info-images-section')}>
        <div className={cx('beer-info-image-title')}>사진</div>
        <div className={cx('beer-info-images')}>
          {snackList.map((snack, idx) => {
            return <img src={snack?.photoUrl} alt="food" key={idx} />
          })}
        </div>
      </div>
    </div>
  )
}

export default BeerDetailPage
