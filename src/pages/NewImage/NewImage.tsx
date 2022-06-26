import React, { useState } from 'react'
import cn from 'classnames/bind'
import style from './NewImage.module.scss'
import { IMG, SVG } from '@/utils/assets'
import axios from 'axios'
const cx = cn.bind(style)

const NewImage = () => {
  const [imgBase64, setImgBase64] = useState('')
  const [newComment, setNewComment] = useState('')
  const [newImg, setNewImg] = useState('')

  const onChangeComment = (e: any) => {
    setNewComment(e.target.value)
  }

  const handChangeFile = (e: any) => {
    e.preventDefault()
    let reader = new FileReader()
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행
      const base64 = reader.result
      if (base64) {
        setImgBase64(base64.toString()) // 파일 base64 상태 업데이트
      }
    }
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
      setNewImg(e.target.files[0])
    }
  }

  const onClickSubmitHandler = () => {
    const formData = new FormData()
    formData.append('photo', newImg)
    formData.append('comment', newComment)

    axios
      .post('http://13.209.96.57:8080/reviews/1/snacks', formData, {
        headers: { 'Content-Type': 'multipart/form-data; ', accept: 'application/json' },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <div className={cx('beer-card')}>
        <img src={IMG('stella_artois')} alt="asahi" className={cx('beer-card-image')}></img>
        <div className={cx('beer-card-info')}>
          <span className={cx('beer-card-name')}>아사히</span>
          <div className={cx('beer-card-rating')}>
            <img src={SVG('star')} alt="star" />
            5.0
          </div>
        </div>
      </div>
      <div>
        <input
          type={'file'}
          id="new-image"
          accept="image/*"
          name="file"
          style={{ display: 'none' }}
          onChange={handChangeFile}
        />
        <label
          htmlFor="new-image"
          className={cx('beer-new-image')}
          style={imgBase64 ? { backgroundImage: `url(${imgBase64})` } : undefined}
        >
          {!imgBase64 && <img src={SVG('plus')} alt="plus" />}
          {!imgBase64 && '사진 추가'}
        </label>
      </div>
      <div className={cx('beer-new-comment-section')}>
        <textarea className={cx('beer-new-comment')} placeholder="코멘트" onChange={onChangeComment} />
        <button className={cx('beer-submit-btn')} onClick={onClickSubmitHandler}>
          등록하기
        </button>
      </div>
    </div>
  )
}

export default NewImage
