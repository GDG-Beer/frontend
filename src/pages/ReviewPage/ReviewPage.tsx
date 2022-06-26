import React, { useEffect, useState } from 'react'
import cn from 'classnames/bind'
import { Rating, Box } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import style from './ReviewPage.module.scss'
import http from '@/utils/http'
import { useLocation, useNavigate } from 'react-router-dom'
const cx = cn.bind(style)

const ReviewPage = () => {
  const [value, setValue] = useState<number | null>(2)
  const [hover, setHover] = useState(-1)
  const [review, setReview] = useState<string>('')
  let navigate = useNavigate()
  const location = useLocation()
  const beer = location.state.beer

  const labels: { [index: string]: string } = {
    0.5: '우욱...',
    1: '너무 맛없어요!',
    1.5: '심각한데요?',
    2: '별론데요?',
    2.5: '평범해요',
    3: '괜찮아요',
    3.5: '좋아요',
    4: '아주 좋아요!',
    4.5: '끝내줘요',
    5: '원픽',
  }
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`
  }

  const handleTextArea = (e: any) => {
    setReview(e.target.value)
  }

  const postReview = async (beer: BeerInfo) => {
    const params = {
      comment: review,
      score: value,
    }
    const res = await http.post(`/users/1/beers/${beer.id}/reviews`, params)
    if (res.status === 200) {
      alert('리뷰가 등록되었습니다.')
      navigate('/detail', {
        state: { beer: beer },
      })
    }
  }

  return (
    <div className={cx('beer-review')}>
      <div className={cx('beer-review-info')}>
        <div className={cx('beer-review-info-left')}>
          <img src={beer.photoUrl} alt="" />
        </div>
        <div className={cx('beer-review-info-right')}>
          <h1>{beer.name}</h1>
          <div>도수: {beer.proof}</div>
          <div>평점: {beer.score}</div>
          <div>가격: {beer.price}</div>
          <div>원산지: {beer.origin}</div>
        </div>
      </div>
      <div className={cx('beer-review-rating')}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 6rem',
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover)
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && <Box>{labels[hover !== -1 ? hover : value]}</Box>}
        </Box>
      </div>
      <div className={cx('beer-review-textarea')}>
        <textarea id="beer-review-textarea" cols={40} rows={10} maxLength={100} onChange={handleTextArea}></textarea>
      </div>
      <div className={cx('beer-review-controller')}>
        <button className={cx('beer-review-control-close')} onClick={() => navigate(-1)}>
          작성 취소
        </button>
        <button className={cx('beer-review-control-submit')} onClick={() => postReview(beer)}>
          완료
        </button>
      </div>
    </div>
  )
}

export default ReviewPage
